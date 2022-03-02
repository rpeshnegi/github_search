import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { IRepository } from '../types/IRepository.d';
import Card from './Card';

type Props = {}

const Repositories: FC<Props> = function Repositories() {
  const { loading, items } = useSelector((state: any) => state.RepositorytReducer);
  const [records, setRecords] = useState<IRepository[]>([]);

  useMemo(() => {
    setRecords(items);
  }, [items]);

  useEffect(() => {
  }, [records]);

  return (
    <div>
      {loading ? (
        <div className="loader">
          Loading...
        </div>
      ) : (records.map((item: IRepository) => (
        <Card key={item.id} item={item} />
      ))
      )}

      {records.length === 0 && (
        <div className="loader">
          No records
        </div>
      )}
    </div>
  );
};

export default Repositories;
