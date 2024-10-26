import React, { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancybox(props) {
  const containerRef = useRef(null);
  const setFancyboxIsActive = props.setFancyboxIsActive || undefined;
  const intiRender = useRef(false);

  if (setFancyboxIsActive) {
    NativeFancybox.defaults.on = {
      close: () => {
        intiRender.current && setFancyboxIsActive("");
      },
    };
  }

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    document.getElementById(props.openFancyBox).click();

    setTimeout(() => {
        intiRender.current = true
    }, 1000);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
