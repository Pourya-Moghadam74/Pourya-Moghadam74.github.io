const PageContainer = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-content px-5 sm:px-8 lg:px-12 ${className}`}>
    {children}
  </div>
);

export default PageContainer;
