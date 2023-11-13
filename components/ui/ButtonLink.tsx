type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = ({ children, ...props }: ButtonLinkProps) => {
  return (
    <a
      {...props}
      className="inline-flex rounded-lg bg-brandingGreen-400 px-5 py-3 text-lg font-medium capitalize text-white shadow-md"
    >
      {children}
    </a>
  );
};
