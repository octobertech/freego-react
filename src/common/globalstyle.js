import { createGlobalStyle } from 'styled-components'
// #FFA500;
export default createGlobalStyle`
 :root{
    --accent-color: #8f2e56;
    --accent-color-active: #cc417a;
    --text-color: #000000;
    --background-color: #f6f6f6;
    --list-container-background: #ededed;
    --error-color: #ff4d4d;
    --amplify-primary-color: #cc417a;
  --amplify-primary-tint: #8f2e56;
  --amplify-primary-shade: #8f2e56;
  --amplify-font-family: "Roboto", sans-serif;
  --amplify-text-sm: 1.2rem;
  --amplify-text-xs: 1rem !important;
  --amplify-text-md-sub: 2rem;]
  --amplify-white: #ffffff;
  --amplify-secondary-tint: #412452;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
  html {
    font-size: 62.5%;
  }
  body, textarea, input, button {
    color: var(--text-color);
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background: var(--background-color);
  }
  html, body, #root {
    height: 100%;
  }
  a:link {
  color: var(--accent-color);
  text-decoration: none;
}

/* visited link */
a:visited {
  color: var(--accent-color);
}

/* mouse over link */
a:hover {
  color: var(--accent-color-active);
  text-decoration: none;
}

/* selected link */
a:active {
  color: var(--accent-color-active);
  text-decoration: none;
}
`