interface BrandConfig {
    logo: string;
    primaryColor: string;
}

interface Organisation {
    name: string;
    humanSupportEnabled: boolean;
    brandConfig: BrandConfig;
}

export interface WidgetSetupData {
    visitorId: string;
    organisation: Organisation;
}