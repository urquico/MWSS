interface USBInterface {
  interfaceNumber: number;
  alternates: {
    alternateSetting: number;
    endpoints: {
      endpointNumber: number;
      type: 'bulk' | 'interrupt' | 'isochronous';
      direction: 'in' | 'out';
    }[];
  }[];
}

interface USBConfiguration {
  configurationValue: number;
  interfaces: USBInterface[]; // Add this
}

interface USBDevice {
  vendorId: number;
  productId: number;
  configuration?: USBConfiguration; // Ensure this matches the extended type
  open(): Promise<void>;
  close(): Promise<void>;
  selectConfiguration(configurationValue: number): Promise<void>;
  claimInterface(interfaceNumber: number): Promise<void>;
  releaseInterface(interfaceNumber: number): Promise<void>;
  transferOut(
    endpointNumber: number,
    data: BufferSource,
  ): Promise<USBOutTransferResult>;
}

interface Navigator {
  usb: {
    getDevices(): Promise<USBDevice[]>;
    requestDevice(options: USBDeviceRequestOptions): Promise<USBDevice>;
  };
}
