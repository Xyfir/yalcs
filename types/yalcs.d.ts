export namespace YALCS {
  export interface Message {
    ts: string;
    text: string;
  }

  export namespace Env {
    export interface Common {
      /**
       * Is this a production environment?
       */
      NODE_ENV: 'development' | 'production';
      /**
       * Base path (for URL) of static files
       * @example "/static/"
       */
      STATIC_PATH: string;
    }

    export interface Server extends YALCS.Env.Common {
      /**
       * Port the API will be hosted on
       */
      PORT: number;
      /**
       * Absolute path for yalcs-web.
       * @example "/path/to/yalcs/web"
       */
      WEB_DIRECTORY: string;
      /**
       * URL for YALCS's web client (where your users will access it)
       * @example "https://example.com/yalcs"
       */
      YALCS_WEB_URL: string;
      /**
       * The id/name of your Slack channel.
       * @example "C2147483705"
       * @example "#public-channel"
       * @example "private-group"
       */
      SLACK_CHANNEL: string;
      /**
       * "Bot User OAuth Access Token"
       * @example "xoxb-155739007072-602556479878-XXXXXXXXXXXXXXXXXXXXXXXX"
       */
      SLACK_BOT_TOKEN: string;
      /**
       * Secret Slack uses to sign requests to YALCS.
       * @example "11b0904b7f4e261dfaca88de70a4935e"
       */
      SLACK_SIGNING_SECRET: string;
    }

    export interface Web extends YALCS.Env.Common {
      /**
       * Port for the Webpack dev server. Only needed for YALCS developers
       */
      PORT: number;
      /**
       * Passed to Material-UI's `createMUITheme()`. Can be left an empty object
       * https://material-ui.com/style/color/#color-tool
       */
      THEME: any;
      /**
       * URL for YALCS's API (yalcs-server)
       * @example "https://example.com/api/yalcs"
       */
      YALCS_API_URL: string;
    }
  }
}