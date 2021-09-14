type Props = {
  num: number | string;
  onNumberSelected: Function;
};

const Number = ({ num, onNumberSelected }: Props) => {
  const clicked = (item: string | number) => {
    console.log(item);
    onNumberSelected(num);
  };
  return (
    <div
      onClick={() => clicked(num)}
      className="col-md-2 col-lg-1 col-sm-6 col-xs-12 text-center number m-2 p-2 avaliable"
    >
      {num}
      <small>DISPONÍVEL</small>
    </div>
  );
};

export default Number;
