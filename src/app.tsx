import { css, glob } from "goober";

glob`
  body, html{
    margin: 0;
  }
`
const wrapperStyle = css`
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  perspective: 10px;
  ::-webkit-scrollbar {
    display: none;
    appearance: none;
    height: 0;
  }
`;
const itemStyle = css`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  transform-style: preserve-3d;
`;
const textStyle = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 20vmin;
  color: white;
  overflow: hidden;
  transform: translateZ(6px) scale(0.4);
`;
export function App() {
  return (
    <main className={wrapperStyle}>
      <div className={itemStyle} style={{background: "blue"}}>
        <h2 className={textStyle}>First</h2>
      </div>
      <div className={itemStyle} style={{background: "red"}}>
        <h2 className={textStyle}>Second</h2>
      </div>
      <div className={itemStyle} style={{background: "green"}}>
        <h2 className={textStyle}>Third</h2>
      </div>
    </main>
  );
}
