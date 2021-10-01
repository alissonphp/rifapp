type Props = {
    num: number | string;
    onNumberSelected: Function;
};

const Number = ({num, onNumberSelected}: Props) => {
    const clicked = (item: string | number) => {
        onNumberSelected(num);
    };
    return (
        <div
            onClick={() => clicked(num)}
            className="col-md-2 col-lg-1 col-sm-6 col-xs-6 text-center p-1 d-flex justify-content-center"
        >
            <div className="number avaliable">
                <h1>{num}</h1>
                <small>DISPONÍVEL</small>
            </div>
        </div>
    );
};

export default Number;
