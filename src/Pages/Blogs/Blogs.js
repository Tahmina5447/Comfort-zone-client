import React from 'react';

const Blogs = () => {
    return (

        <div className='my-16'>
            <h1 className='text-center font-bold text-2xl'>Let's Know Something</h1>
            <div className='w-2/3 mx-auto mt-10'>
                <div tabIndex={0} className="collapse collapse-arrow border border-primary rounded-box mb-3">
                    <div className="collapse-title text-xl font-bold">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>URL</p>
                        <p>Web storage</p>
                        <p>Local state</p>
                        <p>Lifted state</p>
                        <p>Derived state</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-primary rounded-box mb-3">
                    <div className="collapse-title text-xl font-bold">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>Prototypal inheritance is a language feature. When we read a property from object, and it is missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-primary rounded-box mb-3">
                    <div className="collapse-title text-xl  font-bold">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</p>
                        <p>
                            Through unit testing, software developers know source code works at the atomic level. Read why unit testing is important and valuable, as well as how it can ease the debugging process.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-primary rounded-box mb-3">
                    <div className="collapse-title text-xl  font-bold">
                    React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p><strong>Angular:</strong> Reloads the complete HTML tags tree structure.
                            Slow loading time due to the Ionic app.
                            Because of the given framework, Angular is relatively stiff and inflexible.
                            To work with Angular.js, you need a certain training period.
                            If a user has deactivated JavaScript in the browser, using a JavaScript-based SPA is not possible. Furthermore, it does not always support outdated or unfamiliar browsers.</p>
                        <p>
                            <strong>React:</strong> Fast loading of new data.
                            One file contains both markup and logic.
                            Enables the separation of data and presentation.
                            It’s simple to get started and doesn’t take much practice.
                            As a library, it doesn’t have that many presets, so it’s easy to learn.
                            Smooth work of the app, even with complex underlying operations or database queries.

                        </p>
                        <p>
                            <strong>Vue:</strong> Limited community comparing to Angular and React
                            The number of available plugins
                            Language handicap because a large number of users are non-English speakers
                            Overcomplications with flexibility

                        </p>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Blogs;