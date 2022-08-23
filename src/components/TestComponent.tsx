import React from "react";

type MyProps = {
    data: {
    id: number;
    name: string;
    }[];
    className: string;
};
type MyState = {
data: {id: number; name: string}[];
};

export default class TestComponent extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
        data: [{
            id: 0,
            name: '',
        }]
        }; 

};
    componentDidMount() {
        this.setState({
            data: this.props.data
        });
    };

    render() {
        console.log(this.state);
        return (
            <div>
               The Data: 
               The State: 
            </div>
        );
    }
}