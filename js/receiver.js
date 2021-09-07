const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
const playbackConfig = new cast.framework.playbackConfig();

//Customize the license for playback
playbackConfig.licenceUrl = '';
playbackConfig.protectionSystem = cast.framework.ContentProtection.WIDEVINE;
playbackConfig.licenseRequestHandler = requestInfo => {
    requestInfo.withCredentials = true;
}
context.start({playbackConfig: playbackConfig});

//Update playback config licenseUrl accoding to the provided value in load request
context.getPlayerManager().setMediaPlaybackInfoHandler((loadRequest,playbackConfig)=>{
    if (loadRequest.media.customData && loadRequest.media.customData.licenseUrl) {
        playbackConfig.licenceUrl = loadRequest.media.customData,licenceUrl;
    }
    return playbackConfig;
});

//Debug Logger
const castDebugger = cast.debug.CastDebugLogger.getInstance();
const LOG_TAG = 'MyApp.LOG';

// Enable debug logger and show a 'DEBUG MODE' overlay at top left corner.
castDebugLogger.setEnabled(true);

// Set verbosity level for Core events.
castDebugger.loggerLevelByEvents = {
    'cast.framework.events.category.CORE': cast.framework.LoggerLevel.INFO,
    'cast.framework.events.EventType.MEDIA_STATUS': cast.framework.LoggerLevel.DEBUG
}