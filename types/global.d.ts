declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare var it: (description: string, callback: () => void) => void;

declare var expect: {
  (value: any): {
    toBeInTheDocument(): void;
  };
};
