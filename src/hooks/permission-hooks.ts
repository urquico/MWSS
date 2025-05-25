import { useEffect, useState } from 'react';

/**
 *
 * @description
 * The Permission interface represents a permission object.
 * The Role interface represents a role object.
 * The usePermissions hook provides access to the user's role and permission checks.
 *
 * The Permission interface contains the following properties:
 * - id: number
 * - permission_name: string
 * - can_create: boolean
 * - can_read: boolean
 * - can_update: boolean
 * - can_delete: boolean
 *
 * @example
 * const { role, hasReadPermission, hasCreatePermission, hasUpdatePermission } = usePermissions();
 *
 **/

export interface Permission {
  id: number;
  permission_name: string;
  can_create: boolean;
  can_read: boolean;
  can_update: boolean;
  can_delete: boolean;
}

interface Role {
  id: number;
  role_name: string;
  description: string;
  status: string;
  permissions: Permission[];
  time_stamps: {
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
  };
}

const usePermissions = () => {
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    const fetchRole = () => {
      const roleData = localStorage.getItem('role');
      if (roleData) {
        setRole(JSON.parse(roleData));
      }
    };

    fetchRole();
  }, []);

  const hasReadPermission = (permissionName: string) => {
    if (!role) return false;
    return role.permissions.some(
      (permission) =>
        permission.permission_name === permissionName && permission.can_read,
    );
  };

  const hasCreatePermission = (permissionName: string) => {
    if (!role) return false;
    return role.permissions.some(
      (permission) =>
        permission.permission_name === permissionName && permission.can_create,
    );
  };

  const hasUpdatePermission = (permissionName: string) => {
    if (!role) return false;
    return role.permissions.some(
      (permission) =>
        permission.permission_name === permissionName && permission.can_update,
    );
  };

  return { role, hasReadPermission, hasCreatePermission, hasUpdatePermission };
};

export default usePermissions;
