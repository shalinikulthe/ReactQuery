"use client";
import { useQuery } from "@tanstack/react-query";
import Table from "./Table";

const FetchigTableData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
const Userdata = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["userdata"],
    queryFn: FetchigTableData,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h3>error:{error.message}</h3>;
  }

  const headers = data?.length ? Object.keys(data[0]) : [];

  return (
    <div>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default Userdata;
