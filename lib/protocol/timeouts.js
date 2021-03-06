/**
 * Configure the amount of time that a particular type of operation can execute
 * for before they are aborted and a |Timeout| error is returned to the client.
 *
 * @param {String} type The type of operation to set the timeout for. Valid values are:<br>- **script** Determines when to interrupt a script that is being [evaluated](https://www.w3.org/TR/webdriver/#executing-script).<br>- **implicit** Gives the timeout of when to abort [locating an element](https://www.w3.org/TR/webdriver/#element-retrieval).<br>- **pageLoad** Provides the timeout limit used to interrupt [navigation](https://html.spec.whatwg.org/#navigate) of the [browsing context](https://html.spec.whatwg.org/#browsing-context).
 * @param {Number} ms The amount of time, in milliseconds, that time-limited commands are permitted to run.
 *
 * @see https://www.w3.org/TR/webdriver/#dfn-get-timeouts
 * @type protocol
 *
 */

import { ProtocolError } from '../utils/ErrorHandler'

let timeouts = function (type, ms) {
    /*!
     * parameter check
     */
    if (typeof type !== 'string' || typeof ms !== 'number') {
        throw new ProtocolError('number or type of arguments don\'t agree with timeouts protocol command')
    }

    return this.requestHandler.create('/session/:sessionId/timeouts', {
        type: type,
        ms: ms
    })
}

export default timeouts
