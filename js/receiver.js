const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

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