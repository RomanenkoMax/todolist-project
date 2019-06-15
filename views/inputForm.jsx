const React = require('react');

class InputForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form name="postForm">
                <input type="hidden" name="id" value="0"/>
                <div className="form-group">
                    <label htmlFor="postName">
                        Название :
                        <input className="form-control" type="text" name="postName" required/>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="postBody">
                        Содержание :
                        <textarea className="form-control" type="text" name="postBody" required/>
                    </label>
                </div>
                <div className="panel-body text-center">
                    <button type="submit" className="btn btn-sm btn-primary"> Сохранить</button>
                    <button id="reset" className="btn btn-sm btn-primary"> Сбросить</button>
                </div>
            </form>
        );
    }
}

module.exports = InputForm;