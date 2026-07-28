import React from "react";

export default class ErrorBoundary extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            hasError: false,

        };

    }

    static getDerivedStateFromError() {

        return {

            hasError: true,

        };

    }

    componentDidCatch(error, info) {

        console.error(error, info);

    }

    render() {

        if (this.state.hasError) {

            return (

                <div className="flex h-screen items-center justify-center">

                    <div className="text-center">

                        <h1 className="text-4xl font-bold">

                            Something went wrong

                        </h1>

                    </div>

                </div>

            );

        }

        return this.props.children;

    }

}