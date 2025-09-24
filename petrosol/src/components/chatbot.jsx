import ParlantChat from "parlant-chat-react";

export default function Chatbot() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <ParlantChat
        float
        agentId="AGENT_ID" // Replace with your actual agent ID
        server="PARLANT_SERVER_URL" // Replace with your actual server URL
        agentName="Petr assistant"
        agentDescription="Provides expert guidance on stock management, distribution, and fraud prevention for fuel stations. Knowledgeable about AZA Petro's solutions, reliability, and productivity improvements."
      />
    </div>
  );
}