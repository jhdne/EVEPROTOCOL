async function generatePDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Set font and initial formatting
        doc.setFont("helvetica");

        // Helper function to add text with proper line breaks and page management
        const addFormattedText = (text, x, y, options = {}) => {
            const { fontSize = 12, lineHeight = 7, maxWidth = 170 } = options;
            doc.setFontSize(fontSize);
            const lines = doc.splitTextToSize(text, maxWidth);
            let currentY = y;

            for (const line of lines) {
                if (currentY > 280) {
                    doc.addPage();
                    currentY = 20;
                }
                doc.text(line, x, currentY);
                currentY += lineHeight;
            }
            return currentY + lineHeight;
        };

        // Title Page
        doc.setFontSize(24);
        doc.text("EVE Protocol Whitepaper", 105, 60, { align: "center" });
        
        doc.setFontSize(16);
        let y = 80;
        doc.text("Empowering AI Agents with Web3 Temporal", 105, y, { align: "center" });
        y += 10;
        doc.text("Knowledge Graph Protocol", 105, y, { align: "center" });

        // Add new page for content
        doc.addPage();
        y = 20;

        // Abstract
        y = addFormattedText("Abstract", 20, y, { fontSize: 16, lineHeight: 10 });
        y = addFormattedText(`With the rapid development of the Web3 ecosystem, AI Agents are demonstrating immense potential in areas such as DeFi, NFTs, and Web3 social. However, the core challenge currently faced by AI Agents is the lack of high-quality, structured, temporal, and contextually aware data. The EVE protocol aims to address this issue by constructing a dynamic Temporal Knowledge Graph (TKG).

EVE Protocol deeply integrates high-quality on-chain and off-chain data streams from sources like Chainlink, Pyth Network, and DIA, processing and storing them into time-dimensional knowledge graphs. These graphs, centered around entities, relationships, and temporal metadata, support AI Agents in performing complex temporal reasoning, global decision-making, and contextual understanding.`, 20, y);

        // Continue with all sections...
        doc.addPage();
        y = 20;

        // 1. Introduction
        y = addFormattedText("1. Introduction", 20, y, { fontSize: 16, lineHeight: 10 });
        y = addFormattedText("1.1 Current Challenge: The Data Conundrum of AI Agents", 20, y, { fontSize: 14, lineHeight: 10 });
        y = addFormattedText(`AI Agents have broad application prospects in the Web3 space, ranging from automated trading strategies and smart contract auditing to personalized user experiences. However, to realize their full potential, AI Agents need access to:

• High-Quality Data Streams: Ensuring the authenticity, reliability, and real-time nature of data.
• Structured Data: Transforming unstructured or semi-structured data into a machine-understandable format, facilitating reasoning.
• Temporal Data: Capturing the trends and context of data evolution over time, rather than just static snapshots.
• Contextual Understanding: The ability to connect different data points to form a comprehensive understanding of complex scenarios.`, 20, y);

        // Continue adding all sections using the same pattern...
        // Each major section starts on a new page
        // Maintain consistent formatting throughout

        // Save the PDF
        return doc;

    } catch (error) {
        console.error('PDF generation error:', error);
        reportError(error);
        return null;
    }
}
