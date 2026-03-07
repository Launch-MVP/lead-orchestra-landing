export * from './types';
import type { ExitIntentHandler, ExitIntentSettings } from './types';
type UseExitIntentProps = ExitIntentSettings;
export declare function useExitIntent(props?: UseExitIntentProps): {
    settings: Required<import("./types").DeepRequired<ExitIntentSettings>>;
    resetState: () => void;
    isTriggered: boolean;
    unsubscribe: () => void;
    resetSettings: () => void;
    updateSettings: (nextSettings?: ExitIntentSettings) => void;
    isUnsubscribed: boolean;
    registerHandler: (handler: ExitIntentHandler) => void;
    willBeTriggered: boolean;
};
//# sourceMappingURL=index.d.ts.map