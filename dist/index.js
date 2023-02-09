import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  height: 80px;\r\n  width: 240px;\r\n  /* background-color: darkmagenta; */\r\n  border-radius: 5px; /* 5px rounded corners */\r\n}\r\n\r\n/* .container{\r\n  max-height: 10px;\r\n} */\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\nimg {\r\n  border-radius: 100%;\r\n  width: 40px;\r\n  height: 40px;\r\n  /* padding-top: 20px; */\r\n  padding-left: 20px;\r\n  padding-right: 15px;\r\n}\r\n\r\nh4, h5 {\r\n  \r\n  /* padding: 0px; */\r\n  margin-bottom: -20px;\r\n  font-weight: normal;\r\n}\r\n\r\n.grid {\r\n  /* background-color: aqua; */\r\n  max-height: 160px;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, 250px);\r\n  grid-gap: 20px;\r\n  grid-auto-columns: max-content;\r\n}\r\n\r\n\r\n";
styleInject(css_248z);

var Card = function (_a) {
    _a.label; var members = _a.members; __rest(_a, ["label", "members"]);
    return (React.createElement("ul", { className: "grid" }, members.map(function (member, index) { return (
    // <li key={member.name}>{member.name}</li>
    React.createElement("div", { key: index, className: "card" },
        React.createElement("div", { className: "container" },
            React.createElement("img", { src: member.imgUrl, alt: "Avatar" }),
            React.createElement("div", { style: { display: 'inline-block', marginLeft: '4px' } },
                React.createElement("h4", null,
                    React.createElement("b", null, member.name)),
                React.createElement("h5", null,
                    member.noOfReads,
                    " books read"))))); })));
};

export { Card };
//# sourceMappingURL=index.js.map
