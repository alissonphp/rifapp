import { TNumber } from "types/Number";

type Props = {
    num: TNumber
    onNumberSelected: Function;
};

const Number = ({num, onNumberSelected}: Props) => {
    const clicked = (item: TNumber) => {
        onNumberSelected(num);
    };
    return (
        <div
            onClick={() => num.status === 'disponível' ? clicked(num) : undefined}
            className="col-md-2 col-lg-1 col-sm-6 col-xs-6 text-center p-1 d-flex justify-content-center"
        >
            <div className={`number ${num.status === 'disponível' ? "avaliable" : "reserved"}`}>
                <h1>{num.number}</h1>
                <small className="text-uppercase">{num.status}</small>
            </div>
        </div>
    );
};

export default Number;
