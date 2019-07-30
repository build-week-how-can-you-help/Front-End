import React from 'react';

function ResultsLayout() {
    return (
        <div>
            <main className="main-content">
                <div className="wrap">
                    <Route exact path="/" render={props => <Landing {...props} setUserQuery={setUserQuery} />} />
                    <Route path="/results" render={props => <Results {...props} userQuery={userQuery} />} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ResultsLayout;
