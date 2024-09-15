import React, { useEffect, useRef } from "react";

function ValueDisplay({ value }) {
  // Создаем реф для хранения предыдущего значения
  const prevValueRef = useRef("");

  // Используем useEffect для обновления предыдущего значения после рендера
  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Current value: {value}</p>
      <p> Previos value: {prevValueRef.current}</p>
    </div>
  );
}

export default ValueDisplay;
