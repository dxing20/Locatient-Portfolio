function NavIcon({ pathD, addr }) {
  return (
    <div className="navIcon" onClick={() => window.open(addr, "_blank")}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d={pathD} />
      </svg>
    </div>
  );
}

export default NavIcon;
