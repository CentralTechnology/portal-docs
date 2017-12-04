import React, { Component } from "react";

export default {
  getSiteProps: () => ({
    title: "React Static"
  }),
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        path: "/portal",
        component: "src/containers/posts/portal/Overview",
      },
      {
        path: '/portal/schedule-task',
        component: 'src/containers/posts/portal/ScheduleTask'
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
