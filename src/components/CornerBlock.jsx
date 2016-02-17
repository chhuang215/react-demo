var React = require('react');
var CornerBlock = React.createClass({
    render:function(){
        return (
            <div className="panel panel-warning">
                <div className="panel-heading text-center">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
});


module.exports = CornerBlock;