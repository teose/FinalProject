import React, { Component } from 'react';
import "./QuouteMachine.scss";

class QuoteMachine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuote: {
                quote: '',
                author: ''
            },
            hasQuote: false
        };
        this.END_POINT = 'https://gist.githubusercontent.com/irkreja/5f35dc197c6be4ddc32a45acdd23fcd7/raw/0d9b85d4a9d9da9dc67fa0257df66ed80702ff3a/quotes.json'
    }

    componentDidMount() {
        this.getRandomQuote();
    }

    getRandomQuote = event => {
        fetch(this.END_POINT)
            .then(response => response.json())
            .then(data => {
                const allQuotes = data.quotes || [];
                const quotesLength  = allQuotes.length;
                const quoteNumber = Math.floor(Math.random() * quotesLength);
                console.log(allQuotes[quoteNumber], quoteNumber); //test wywalania
                if (quotesLength > 0) {
                    let { currentQuote } = this.state;
                    currentQuote.quote = allQuotes[quoteNumber].quote;
                    currentQuote.author = allQuotes[quoteNumber].author;
                    this.setState({ currentQuote }, () => {
                        if(this.state.hasQuote === false) {
                            this.setState({ hasQuote: true })
                        }
                    })
                }
                else {
                    return console.error('404 No quotes found!')
                }
            })
    };

    renderQuote = () => {
        const { author, quote } = this.state.currentQuote;
        return (
            <div className="quote-text">
                <p className="text">
                    <span className="quote-left">"</span>
                    {quote}"
                </p>
                <p className="author">~ {author}</p>
            </div>
        )
    };

    tweet = () => {
        const thisQuote = this.state.currentQuote.quote;
        const thisAuthor = this.state.currentQuote.author;
        return (
            <a className="tweet-quote" href={`https://twitter.com/intent/tweet?text="${thisQuote}" ~${thisAuthor}    🔥Quote Resolver🔥 By @Teose`} target="_blank">
                <button className="tweet-quote-btn" title="Tweet this quote">
                    <i className="fa fa-twitter"></i>
                          <span>Tweet!</span>

                </button>
            </a>
        )
    };

    render(){
        const { hasQuote } = this.state;
        return (
            <div className="quote-box">
                {hasQuote === true ?
                    this.renderQuote()
                    : <span><i className="fa fa-spinner"></i></span>}<br />
                <div className="buttons">
                    <button className="new-quote" onClick={this.getRandomQuote} title="Most of these are truly meaningless!">
                        Get A Random Quote
                    </button>
                    {this.tweet()}
                </div>
            </div>
        )
    }
}

export default QuoteMachine;