import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routeConfig } from "./routes";

const Router: FC = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
