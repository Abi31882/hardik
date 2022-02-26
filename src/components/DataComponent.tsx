import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDataBeginAction } from "../actions/data.actions";
import { getDataArraySelector } from "../selectors/data.selectors";
import { useAppSelector } from "../store";

const DataComponent = () => {
  const [ID, setID] = useState(1);
  const data = useAppSelector(getDataArraySelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataBeginAction(ID));
    //eslint-disable-next-line
  }, []);
  return (
    <div className="space-y-5  m-auto w-96">
      {data.map((d) => (
        <div
          key={d.id}
          className="border-2  text-center border-black rounded-lg"
        >
          <div className="font-bold text-xl">{d.id}</div>
          <div>
            {d.first_name} {d.last_name}
          </div>
          <div>{d.email}</div>
          <div className="flex justify-center">
            <img
              className="w-32 h-32 rounded-full "
              src={d.avatar}
              alt={d.email}
            />
          </div>
        </div>
      ))}
      {ID === 1 && (
        <div className="flex justify-center items-center mt-6">
          <button
            className="bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark"
            onClick={() => {
              setID(ID + 1);
              dispatch(getDataBeginAction(+ID + 1));
            }}
          >
            Next
          </button>
        </div>
      )}
      {ID === 2 && (
        <div className="flex justify-center items-center mt-6">
          <button
            className="bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark"
            onClick={() => {
              setID(ID - 1);
              dispatch(getDataBeginAction(+ID - 1));
            }}
          >
            Prev.
          </button>
        </div>
      )}
    </div>
  );
};

export default DataComponent;
