import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utility/AddtoDB.JS";
import Book from "./Book/Book";

const ReadList = () => {
  const [readList, setreadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStordBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStordBook.includes(book.bookId)
    );
    setreadList(myReadList);
  }, []);
  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setreadList(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByRating = [...readList.sort((a, b) => b.rating - a.rating)];
      setreadList(sortedByRating);
    }
  };

  return (
    <div>
      <details className="dropdown  flex justify-center ">
        <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <Link onClick={() => handleSort("pages")}>Pages</Link>
          </li>
          <li>
            <Link onClick={() => handleSort("ratings")}>Rating</Link>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl font-bold">Book I Read {readList.length}</h2>
          <div className="mb-9 grid md:grid-cols-2 lg:grid-cols-3 ">
            {readList.map((b) => (
              <Book key={b.bookId} book={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
