import Filter from "../../components/filter/Filter";
import "./listPage.scss";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function ListPage() {
  const data = useLoaderData();

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`listPage  ${theme === "dark" ? "listDark" : ""}`}>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div
        className={`mapContainer  ${
          theme === "dark" ? "mapContainerDark" : ""
        }`}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
