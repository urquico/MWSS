interface HIDDevice {
  opened: boolean;
  vendorId: number;
  productId: number;
  productName?: string;
  collections?: any[]; // HID collections

  open(): Promise<void>;
  close(): Promise<void>;
  sendReport(reportId: number, data: BufferSource): Promise<void>;
  receiveReport(): Promise<DataView>;
}

interface Navigator {
  hid: {
    getDevices(): Promise<HIDDevice[]>;
    requestDevice(options?: {
      filters?: { vendorId?: number; productId?: number }[];
    }): Promise<HIDDevice[]>;
  };
}
