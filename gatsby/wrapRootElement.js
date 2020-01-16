const React = require("react")
const Layout = require("../src/components/layout/layout").default

exports.wrapRootElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}