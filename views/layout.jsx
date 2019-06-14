const React = require('react');
const MainPage = require('./main-page');
const InputForm = require('./inputForm');

class LayoutTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
                      integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/style.css"/>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                        crossOrigin="anonymous"></script>
            </head>
            <body>
            <h2>Список заметок</h2>
            <InputForm/>
            <MainPage result={this.props.result}/>
            <script src="/script.js"></script>
            </body>
            </html>

        )
    }
}

module.exports = LayoutTop;