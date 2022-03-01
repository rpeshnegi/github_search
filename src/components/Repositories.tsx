import React, { FC, useEffect, useMemo, useState } from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { IRepository } from "../types/IRepository";


type Props = {}

const Repositories: FC<Props> = () => {
  const { loading, items } = useSelector((state: any) => state.RepositorytReducer);
  const [records, setRecords] = useState<IRepository[]>([])

  useMemo(() => {
    setRecords(items)
  }, [items])

  return (
    <div>
      {loading ? (
        <div className="loader">
          Loading...
        </div>
      ) : (
        records.map((item: IRepository) => {
          return (
            <div key={item.id}>{item.name}</div>
          );
        })
      )}
    </div>
  );
}

export default Repositories