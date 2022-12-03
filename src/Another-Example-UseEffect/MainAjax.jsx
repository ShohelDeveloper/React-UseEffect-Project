import ajaxUseApp from "./ajaxUseAPP";
const MainAjax = () => {
  const { user, id, loading, max, nextHandler, prevHandler } = ajaxUseApp();
  console.log(user)

    return (
      <div>
        <h1> Ajax Example</h1>
        <h2>Users - {id}</h2>
        {loading && <p>Loading...</p>}
        {!loading && user && (
          <div>
            name:{user.name}
            <br />
            email:{user.email}
            <br />
            Number:{user.phone}
          </div>
        )}
        <div>
          <button disabled={id === 1} onClick={prevHandler}>
            Previous
          </button>
          <button disabled={id === max} onClick={nextHandler}>
            Next
          </button>
        </div>
      </div>
    );
   
  };
  
    


export default MainAjax;
