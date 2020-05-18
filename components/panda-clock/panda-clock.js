export class PandaClock extends HTMLElement {
  constructor() {
    super();

    const date = new Date();
    const hoursAngle = (360 * date.getHours()) / 12 + date.getMinutes() / 2;
    const minuteAngle = (360 * date.getMinutes()) / 60;
    const secondAngle = (360 * date.getSeconds()) / 60;
    const shifter = (val) => {
      return [val, 100, 100].join(" ");
    };

    this._root = this.attachShadow({ mode: "open" });
    this._root.innerHTML = `
      <svg width="200" height="200">
        <g>
          <circle
            id="circle"
            style="stroke: #fff; stroke-width: 12px; fill: #20b7af;"
            cx="100"
            cy="100"
            r="80"
          ></circle>
        </g>
        <g>
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="55"
            style="stroke-width: 3px; stroke: #fffbf9;"
            id="hourhand"
          >
            <animatetransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="${shifter(hoursAngle)}"
              to="${shifter(hoursAngle + 360)}"
              dur="43200s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="40"
            style="stroke-width: 4px; stroke: #fdfdfd;"
            id="minutehand"
          >
            <animatetransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="${shifter(minuteAngle)}"
              to="${shifter(minuteAngle + 360)}"
              dur="3600s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="30"
            style="stroke-width: 2px; stroke: #c1efed;"
            id="secondhand"
          >
            <animatetransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="${shifter(secondAngle)}"
              to="${shifter(secondAngle + 360)}"
              dur="60s"
              repeatCount="indefinite"
            />
          </line>
        </g>
        <circle
          id="center"
          style="fill: #128a86; stroke: #c1efed; stroke-width: 2px;"
          cx="100"
          cy="100"
          r="3"
        ></circle>
      </svg>
    `;
  }

  connectedCallback() {
    for (var i = 1; i <= 12; i++) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", "line");
      el.setAttribute("x1", "100");
      el.setAttribute("y1", "30");
      el.setAttribute("x2", "100");
      el.setAttribute("y2", "40");
      el.setAttribute("transform", "rotate(" + (i * 360) / 12 + " 100 100)");
      el.setAttribute("style", "stroke: #ffffff;");
      this._root.querySelector("svg").appendChild(el);
    }
  }
}
