import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the version type argument from the command line
const versionType = process.argv[2];

if (!versionType) {
  console.error(
    'Please provide a version type or specific version (e.g., npm run update patch or npm run update 1.13.6)',
  );
  process.exit(1);
}

// Get __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, 'package.json');

function isValidVersion(version) {
  return /^\d+\.\d+\.\d+$/.test(version);
}

function incrementVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number);

  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      console.error('Invalid version type. Use "major", "minor", or "patch".');
      process.exit(1);
  }
}

function decrementVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number);

  switch (type) {
    case 'rollback-major':
      return `${Math.max(major - 1, 0)}.0.0`;
    case 'rollback-minor':
      return `${major}.${Math.max(minor - 1, 0)}.0`;
    case 'rollback-patch':
      return `${major}.${minor}.${Math.max(patch - 1, 0)}`;
    default:
      console.error(
        'Invalid rollback type. Use "rollback-major", "rollback-minor", or "rollback-patch".',
      );
      process.exit(1);
  }
}

async function updateVersion() {
  try {
    // Read the package.json file
    const data = await fs.readFile(packageJsonPath, 'utf8');

    // Parse the JSON data
    const packageJson = JSON.parse(data);

    // Determine if it's a rollback, increment, or specific version update
    if (versionType.startsWith('rollback')) {
      packageJson.version = decrementVersion(packageJson.version, versionType);
    } else if (isValidVersion(versionType)) {
      packageJson.version = versionType;
    } else {
      packageJson.version = incrementVersion(packageJson.version, versionType);
    }

    // Write the updated package.json file back
    await fs.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      'utf8',
    );

    // Log the updated version
    console.log(`Updated package.json version to ${packageJson.version}`);

    // Return the current version
    return packageJson.version;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

updateVersion().then((currentVersion) => {
  console.log(`Current version is ${currentVersion}`);
});
