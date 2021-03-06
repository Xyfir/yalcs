export namespace Yalcs {
  export interface Message {
    outgoing?: boolean;
    text: string;
    ts: string;
  }

  export interface Thread {
    thread_ts?: string;
    messages?: Yalcs.Message[];
    key?: string;
  }

  export interface HostContext {
    name?: string;
    firstname?: string;
    login?: string;
    email?: string;
    host?: string;
  }

  export interface EventData {
    yalcs: true;
    show?: boolean;
    link?: string;
  }

  export interface SendMessageOptions {
    thread_ts?: Yalcs.Thread['thread_ts'];
    text: string;
    key?: Yalcs.Thread['key'];
    ip?: string;
    context?: Yalcs.HostContext;
  }

  export interface GetMessageOptions {
    /**
     * Return all messages _after_ this one.
     */
    message_ts: Yalcs.Message['ts'];
    thread_ts: Yalcs.Thread['thread_ts'];
    key?: Yalcs.Thread['key'];
  }

  export interface GetThreadOptions {
    thread_ts: Yalcs.Thread['thread_ts'];
    key?: Yalcs.Thread['key'];
  }

  export namespace Env {
    export interface Server {
      /**
       * Port the API will be hosted on
       */
      PORT: number;
      /**
       * Options for the user database (uses node-persist). All that's needed is `dir`
       * https://www.npmjs.com/package/node-persist#async-initoptions-callback
       */
      STORAGE: any;
      /**
       * Is this a production environment?
       */
      NODE_ENV: 'development' | 'production';
      /**
       * Base path (for URL) of static files
       * @example "/static/"
       */
      STATIC_PATH: string;
      /**
       * Absolute path for yalcs-web.
       * @example "/path/to/yalcs/web"
       */
      WEB_DIRECTORY: string;
      /**
       * URL for the Yalcs embedded web client
       * @example "https://example.com/yalcs"
       */
      YALCS_WEB_URL: string;
      /**
       * The id of your Slack channel.
       * @example "C2147483705"
       */
      SLACK_CHANNEL: string;
      /**
       * "Bot User OAuth Access Token"
       * @example "xoxb-155555555555-600000000000-XXXXXXXXXXXXXXXXXXXXXXXX"
       */
      SLACK_BOT_TOKEN: string;
      /**
       * Secret Slack uses to sign requests to Yalcs.
       * @example "11b0904b7f4e261dfaca88de70a4935e"
       */
      SLACK_SIGNING_SECRET: string;

      /**
      * if true, deactivate geoip fetch to sets Slack discuss
      **/
      NO_GEOIP?: boolean;

      /**
      * true or false to await context data from app window.
      **/
      APP_CONTEXT?: boolean;
      
      /**
      * true or false to set Express to get ips from X-FORWARDED-FOR header.
      **/
      TRUST_PROXY?: boolean;
    }

    export interface Web {
      /**
       * Port for the Webpack dev server. Only needed for Yalcs developers
       */
      PORT: number;
      /**
       * Passed to Material-UI's `createMUITheme()`. Can be left an empty object
       * https://material-ui.com/style/color/#color-tool
       * @example
       * {"palette":{"type":"light","primary":{"main":"#6a1b9a"},"secondary":{"main":"#3f51b5"}}}
       * // For dark theme set `type` to "dark".
       */
      THEME: any;
      /**
       * Is this a production environment?
       */
      NODE_ENV: 'development' | 'production';
      /**
       * Floating Action Button text.
       * @example "Got a question?"
       */
      FAB_TEXT?: string;
      /**
       * Chat window title.
       * @example "Send us a message..."
       */
      TITLE_TEXT: string;
      /**
       * Base path (for URL) of static files
       * @example "/static/"
       */
      STATIC_PATH: string;
      /**
       * Should the floating action button be on the right side?
       */
      FAB_ON_RIGHT?: boolean;
      /**
       * URL for the Yalcs API (yalcs-server)
       * @example "https://example.com/api/yalcs"
       */
      YALCS_API_URL: string;
      /**
       * Placeholder text for the message input.
       * @example "Ask a question or give your feedback..."
       */
      MESSAGE_PLACEHOLDER_TEXT: string;
      /**
       * Floating Action Button text when unread messages are available.
       * @example "Check your messages"
       */
      UNREAD_MESSAGES_FAB_TEXT?: string;

      /**
      * true or false to await context data from app window.
      **/
      APP_CONTEXT?: boolean;

    }

    export interface Loader {
      /**
       * Array of regular expressions for URL routes on your app where Yalcs
       *  will display its floating action button. Expressions are checked
       *  against the full URL (host and all) of the page the loader is
       *  imported into. Expressions are case sensitive!
       * @example
       *  // Show where /support#contact or /sales?contact=1 are in the URL
       *  ["\/support#contact","\/sales\?contact=1"]
       * @example
       *  // Show everywhere
       *  ["."]
       */
      ROUTES: string[];
      /**
       * Is this a production environment?
       */
      NODE_ENV: 'development' | 'production';
      /**
       * Should the floating action button be on the right side?
       */
      FAB_ON_RIGHT?: boolean;
      /**
       * URL for the Yalcs embedded web client
       * @example "https://example.com/yalcs"
       */
      YALCS_WEB_URL: string;
    }
  }
}
