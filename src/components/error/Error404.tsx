import {LinkPath} from "@src/global/link_path.tsx";
import {useNavigate} from "react-router";

function Error404() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="py-3 my-4 text-center text-body-secondary justify-content-center">
          <h1>404</h1>
          <p>The page you are looking for cannot be found.</p>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-info"
                    onClick={() => {
                      navigate(-1)
                    }}>
              &laquo; 上一页
            </button>
            <div className="my-margin-r3"></div>
            <a type="button" className="btn btn-info"
               href={LinkPath.Root}>
              去首页 &raquo;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;