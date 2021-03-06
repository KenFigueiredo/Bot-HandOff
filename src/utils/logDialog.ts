import queue from '../lib/queue';
import * as builder from 'botbuilder';
import ConversationState from '../framework/enum/ConversationState';

export default function logDialog(session, botMsg: string) {
    let customerConversationId = session.message.address.channelId + '/' + session.message.address.conversation.id;
    let conversation = queue.get(customerConversationId);
    queue.add(customerConversationId, new builder.Message().text(botMsg), null); // add to this customer queue
}
