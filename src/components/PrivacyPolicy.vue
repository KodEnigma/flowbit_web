<template>
  <section class="px-6 lg:px-40 py-12">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-black">Privacy Policy</h1>
      </div>

      <p class="text-sm text-slate-600 mb-6">Effective date: February 4, 2026</p>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">1. Introduction</h2>
        <p class="text-slate-700 mb-3">
          This Privacy Policy explains how Zoltraa Technologies ("Zoltraa", "we", "us", or "our")
          collects, uses, and discloses information about you when you access or use our services,
          including the Zoltraa web app (the "Service").
        </p>
        <p class="text-slate-700 mb-3">
          At Zoltraa, we understand that your financial data is among the most sensitive information
          you can share. We have designed our Service with privacy and security as foundational
          principles, not afterthoughts. This Privacy Policy is intended to provide you with complete
          transparency about how we handle your information, what data we collect, how we process it,
          and most importantly, what we do NOT do with your data.
        </p>
        <p class="text-slate-700 mb-3">
          We believe in giving you control over your financial information. This policy outlines the
          specific technical and organizational measures we have implemented to protect your privacy,
          including our unique approach to bank statement processing that prioritizes your data
          security above all else.
        </p>
        <p class="text-slate-700">
          By using our Service, you agree to the collection, use, and disclosure of your information
          as described in this Privacy Policy. If you do not agree with this policy, please do not
          access or use our Service. We encourage you to read this policy carefully and reach out to
          us if you have any questions or concerns.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">2. Data We Collect</h2>
        <p class="text-slate-700 mb-4">
          We collect only the minimum amount of information necessary to provide you with our expense
          tracking and analytics service. We categorize the data we collect into several types:
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">2.1 Account and Profile Information</h3>
        <p class="text-slate-700 mb-3">
          When you create an account with Zoltraa, we collect basic identification and contact
          information that you provide directly to us. This includes your name, email address, and any
          contact details you choose to share. We collect this information to create and maintain your
          account, communicate with you about the Service, send you important notifications, and
          provide customer support when needed.
        </p>
        <p class="text-slate-700 mb-4">
          Your email address serves as your primary account identifier and is used for authentication,
          password recovery, security alerts, and service-related communications. You can update your
          profile information at any time through your account settings.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">2.2 Bank Statement Upload and Transaction Data</h3>
        <p class="text-slate-700 mb-3">
          This section describes one of the most important aspects of our Service: how we handle your
          bank statements and the financial transaction data contained within them.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">What Happens When You Upload a Bank Statement:</h4>
        <p class="text-slate-700 mb-3">
          When you upload a bank statement to Zoltraa, we process it entirely in memory using our
          proprietary Python-based table scanning technology. This is a critical security feature that
          distinguishes us from many other financial services. Your uploaded PDF file is NEVER written
          to disk, NEVER stored in any database, and NEVER retained on our servers beyond the brief
          processing period.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">The Processing Workflow:</h4>
        <p class="text-slate-700 mb-2">
          Here is the detailed step-by-step process that occurs when you upload a bank statement:
        </p>
        <div class="pl-6 mb-3">
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Step 1 - Secure Upload:</span> Your PDF bank statement is
            uploaded to our servers through an encrypted HTTPS connection. The file is received
            directly into our application's memory buffer.
          </p>
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Step 2 - In-Memory Processing:</span> The PDF file is
            immediately processed using our Python-based table scanning engine. This engine reads the
            PDF structure, identifies transaction tables, and extracts relevant transaction data—all
            while keeping the file exclusively in RAM (random access memory). At no point during this
            process is the file written to any persistent storage medium such as a hard drive, SSD, or
            database.
          </p>
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Step 3 - Data Extraction:</span> From each transaction row in
            your bank statement, we extract only the following four pieces of information: the
            transaction amount, the transaction date, the transaction description (typically the
            merchant name or transaction type), and the transaction reference number (if available in
            the statement). We do not extract or retain any other information such as your full account
            number, sort code, bank name, branch information, opening or closing balances, or any
            personal identifiers that may appear in statement headers or footers.
          </p>
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Step 4 - Tokenization and Encoding:</span> The extracted
            transaction data is immediately tokenized and encoded for storage in our secure database.
            Tokenization is a security process that converts sensitive data into non-sensitive tokens
            that can only be understood by our authorized systems. This means that even if our database
            were somehow compromised, the tokenized transaction data would be meaningless to any
            unauthorized party.
          </p>
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Step 5 - Immediate Deletion:</span> Once the transaction data
            has been extracted, tokenized, and encoded, the original PDF file is immediately and
            permanently deleted from memory. This entire process typically takes between 2 to 3 minutes
            depending on the size and complexity of your bank statement. After this processing window,
            no trace of the original PDF exists anywhere in our systems.
          </p>
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Step 6 - Secure Storage:</span> Only the tokenized and encoded
            transaction metadata (amount, date, description, and transaction reference) is stored in
            our encrypted database. This data is encrypted both at rest and in transit, using
            industry-standard encryption protocols.
          </p>
        </div>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Supported File Formats:</h4>
        <p class="text-slate-700 mb-3">
          We currently support bank statements in PDF format only. Our Python-based parsing engine is
          specifically optimized to read and extract tabular transaction data from PDF documents
          generated by banks and financial institutions. We do not support image files (JPG, PNG),
          scanned documents, or other file formats at this time, as these would require different
          processing technologies that might compromise our security-first approach.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">What We Do NOT Store:</h4>
        <p class="text-slate-700 mb-3">
          It is equally important to understand what we do NOT collect or store from your bank
          statements. We do not store your complete bank statement file, your full bank account number,
          your bank sort code or routing number, your bank's name or branch information, your account
          opening or closing balances, any personal identification numbers that may appear on the
          statement, statement headers or footers containing personal information, any images or logos
          embedded in the PDF, or any other data beyond the four specific transaction fields mentioned
          above (amount, date, description, and transaction reference).
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">No AI or Machine Learning Processing:</h4>
        <p class="text-slate-700 mb-4">
          We want to be absolutely clear that we do NOT use artificial intelligence, machine learning
          algorithms, or any form of automated decision-making systems to process your bank statements
          or transaction data. Our parsing technology is a deterministic, rule-based table scanning
          system built in Python. This means the extraction process follows explicit programming rules
          and does not involve any AI models that might inadvertently retain or learn from your
          financial data. We made this architectural decision specifically to protect your privacy and
          ensure that your sensitive financial information is never used to train algorithms or
          contribute to any machine learning datasets.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">2.3 Bank Connection Data (Alternative Method)</h3>
        <p class="text-slate-700 mb-4">
          In addition to manual bank statement uploads, we may offer secure, token-based connections to
          your bank accounts through trusted banking partners and open banking APIs. When you use this
          feature, we collect transactional metadata directly from your bank through secure API
          connections. We do not store your actual bank login credentials; instead, we use secure
          OAuth-based tokens that grant us limited, read-only access to retrieve transaction data on
          your behalf. You can revoke these tokens at any time through your account settings or
          directly through your bank's security settings.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">2.4 Usage Data and Technical Information</h3>
        <p class="text-slate-700 mb-3">
          When you interact with our Service, we automatically collect certain technical information
          about your device and how you use the Service. This includes your IP address, browser type
          and version, operating system and version, device identifiers, the pages or features you
          access within the Service, the time and date of your visits, the time spent on specific
          pages, and the referring website or source that directed you to our Service.
        </p>
        <p class="text-slate-700 mb-4">
          We collect this information to understand how users interact with our Service, identify
          technical issues, improve our user interface and experience, enhance security by detecting
          unusual access patterns, and optimize the performance and reliability of our platform. This
          data is aggregated and anonymized whenever possible and is not used to personally identify
          you except when necessary for security purposes (such as detecting fraudulent login
          attempts).
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">2.5 Location Data</h3>
        <p class="text-slate-700 mb-4">
          With your explicit permission, we may collect approximate location data based on your IP
          address or device GPS coordinates. We use location data to enhance security by flagging login
          attempts from unusual locations, provide localized features and insights, and improve the
          overall relevance of our Service to your specific geographic context. You can control
          location permissions through your device settings or browser settings at any time. We do not
          track your precise real-time location or create detailed location histories.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">2.6 Cookies and Tracking Technologies</h3>
        <p class="text-slate-700 mb-3">
          We use cookies, web beacons, and similar tracking technologies to enhance your experience on
          our Service. Cookies are small text files stored on your device that help us recognize you,
          remember your preferences, keep you logged in between sessions, and understand how you use
          the Service.
        </p>
        <p class="text-slate-700 mb-3">
          We use several types of cookies: Essential cookies that are necessary for the Service to
          function properly (such as authentication cookies), functional cookies that remember your
          preferences and settings, analytics cookies that help us understand usage patterns and
          improve the Service, and security cookies that protect your account from unauthorized access.
        </p>
        <p class="text-slate-700">
          You can control cookie preferences through your browser settings. However, please note that
          disabling essential cookies may affect your ability to use certain features of the Service.
          For more detailed information about our cookie practices, please refer to our separate
          Cookies Policy.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
        <p class="text-slate-700 mb-4">
          We use the information we collect solely to provide, maintain, improve, and protect our
          Service. We do not sell your personal information to third parties, and we do not use your
          financial data for any purpose other than delivering the expense tracking and analytics
          features you expect from Zoltraa.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">3.1 Authentication and Account Management</h3>
        <p class="text-slate-700 mb-4">
          We use your account information to authenticate your identity when you log in, verify that
          you are authorized to access specific account data, manage your account settings and
          preferences, enable password reset and account recovery processes, and maintain the security
          and integrity of your account. Authentication is a critical security function that ensures
          only you can access your financial data within our Service.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">3.2 Transaction Data Processing and Analytics</h3>
        <p class="text-slate-700 mb-3">
          The core purpose of our Service is to provide you with meaningful insights into your spending
          patterns and financial behavior. We use the transaction data extracted from your bank
          statements (amount, date, description, and transaction reference) to perform various
          analytical functions on your behalf.
        </p>
        <p class="text-slate-700 mb-2">
          Specifically, we use this data to:
        </p>
        <div class="pl-6 mb-4">
          <p class="text-slate-700 mb-2">
            Categorize your transactions automatically based on merchant names and descriptions. For
            example, transactions at grocery stores are categorized as "Groceries," transactions at gas
            stations as "Transportation," and so forth. This categorization is performed using
            rule-based logic and predefined merchant databases—not AI or machine learning.
          </p>
          <p class="text-slate-700 mb-2">
            Aggregate your spending across different categories and time periods to generate spending
            reports, charts, and visualizations that help you understand where your money goes.
          </p>
          <p class="text-slate-700 mb-2">
            Identify spending trends and patterns over time, such as increases or decreases in specific
            categories, recurring transactions, and seasonal variations in your expenses.
          </p>
          <p class="text-slate-700 mb-2">
            Calculate summary statistics such as total monthly spending, average transaction amounts,
            most frequent merchants, and highest spending categories.
          </p>
          <p class="text-slate-700 mb-2">
            Generate personalized insights and recommendations to help you manage your finances more
            effectively. These insights are based solely on your own transaction patterns and are not
            influenced by other users' data or external algorithms.
          </p>
          <p class="text-slate-700">
            Enable you to search, filter, and review your transaction history through our intuitive
            interface, making it easy to find specific transactions or analyze particular time periods.
          </p>
        </div>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">3.3 Service Personalization</h3>
        <p class="text-slate-700 mb-4">
          We use your usage patterns and preferences to customize your experience with the Service.
          This includes remembering your preferred currency, date format, and display settings, showing
          you the most relevant insights and reports based on your spending patterns, organizing your
          dashboard to highlight the information most important to you, and adapting the interface
          based on your interactions and feedback. Personalization enhances usability and ensures that
          Zoltraa works the way you want it to.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">3.4 Communication and Support</h3>
        <p class="text-slate-700 mb-4">
          We use your contact information to communicate with you about important matters related to
          your account and the Service. This includes sending you transactional emails such as account
          verification, password reset confirmations, and security alerts, notifying you of important
          updates to our Service, Privacy Policy, or Terms of Service, responding to your support
          requests and inquiries, providing customer service and technical assistance when you
          encounter issues, and occasionally sending you product announcements or feature updates that
          we believe may be of interest to you. You can opt out of non-essential communications at any
          time through your account settings or by following the unsubscribe link in our emails.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">3.5 Security and Fraud Prevention</h3>
        <p class="text-slate-700 mb-4">
          We use technical information, including IP addresses, device identifiers, and usage patterns,
          to protect the security of your account and our Service. This includes detecting and
          preventing unauthorized access attempts, identifying suspicious login patterns or unusual
          account activity, protecting against fraud, abuse, and malicious activities, monitoring for
          security vulnerabilities and potential threats, and enforcing our Terms of Service and
          acceptable use policies. These security measures are essential to maintaining the trust and
          safety of our platform.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">3.6 Service Improvement and Analytics</h3>
        <p class="text-slate-700 mb-4">
          We analyze aggregated and anonymized usage data to understand how users interact with our
          Service and identify opportunities for improvement. This helps us fix bugs and technical
          issues, optimize the performance and speed of our platform, develop new features and
          functionality that users need, improve our user interface and user experience design, and
          make data-driven decisions about product development and resource allocation. This analysis
          is conducted on anonymized data that cannot be traced back to individual users, ensuring your
          privacy is protected even during our internal analytics processes.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">3.7 Legal Compliance</h3>
        <p class="text-slate-700">
          In certain circumstances, we may need to use or disclose your information to comply with
          legal obligations, such as responding to valid legal requests from law enforcement or
          regulatory authorities, enforcing our legal rights and agreements, preventing fraud or
          illegal activities, protecting the safety and security of our users and the public, and
          complying with applicable financial regulations and data protection laws. We will only
          disclose your information when legally required to do so and will make reasonable efforts to
          notify you of such requests unless prohibited by law.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
        <p class="text-slate-700 mb-4">
          Zoltraa is committed to keeping your financial data private and secure. We do not sell, rent,
          or trade your personal information or transaction data to third parties for marketing
          purposes. We share your information only in the limited circumstances described below, and
          always with appropriate safeguards to protect your privacy.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">4.1 No Third-Party Data Sharing for Statement Processing</h3>
        <p class="text-slate-700 mb-3">
          One of the most important aspects of our privacy commitment is that we do NOT share your bank
          statements or transaction data with any third-party services for processing, analysis, or any
          other purpose. Unlike many financial technology services that rely on third-party data
          processors, OCR services, or cloud storage providers to handle sensitive financial documents,
          Zoltraa processes all bank statement uploads entirely in-house using our own proprietary
          technology.
        </p>
        <p class="text-slate-700 mb-3">
          When you upload a bank statement, it is processed exclusively on our own secure servers using
          our Python-based table scanning engine. We do not use any third-party optical character
          recognition (OCR) services, external document processing APIs, third-party cloud storage
          solutions for uploaded files, external machine learning or AI services for data extraction,
          or any other third-party services that would require sharing your bank statement or
          transaction data.
        </p>
        <p class="text-slate-700 mb-4">
          This approach significantly reduces the risk of data breaches, unauthorized access, or misuse
          of your financial information because your sensitive data never leaves our controlled
          environment during the processing stage. Our commitment to in-house processing means fewer
          entities have access to your data, creating a more secure and private experience.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">4.2 Service Providers and Infrastructure Partners</h3>
        <p class="text-slate-700 mb-3">
          While we do not share your bank statements with third parties, we do work with a limited
          number of trusted service providers who help us operate and maintain the infrastructure that
          powers the Zoltraa Service. These service providers may have access to certain categories of
          data, but never your raw bank statements or unencrypted transaction details.
        </p>
        <p class="text-slate-700 mb-2">
          The types of service providers we may work with include:
        </p>
        <div class="pl-6 mb-3">
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Cloud Hosting Providers:</span> We use reputable cloud
            infrastructure providers to host our application servers and databases. However, as stated
            earlier, your uploaded bank statement files are never stored on these servers—they are
            processed in memory and immediately deleted. Only encrypted and tokenized transaction
            metadata is stored in our databases.
          </p>
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Security and Monitoring Services:</span> We may use security
            services to monitor for threats, detect intrusions, and protect against cyberattacks. These
            services have access to system logs and technical data but do not have access to your
            financial transaction data.
          </p>
          <p class="text-slate-700 mb-2">
            <span class="font-semibold">Email Service Providers:</span> We use third-party email
            services to send you transactional emails, security alerts, and account notifications.
            These providers have access to your email address and the content of the messages we send,
            but not your financial data.
          </p>
          <p class="text-slate-700">
            <span class="font-semibold">Customer Support Tools:</span> We may use customer support
            platforms to manage support tickets and communicate with you when you need assistance.
            Support representatives have access only to the information necessary to resolve your issue
            and are bound by strict confidentiality obligations.
          </p>
        </div>
        <p class="text-slate-700 mb-4">
          All service providers are carefully vetted and are contractually obligated to protect your
          information with the same level of security and privacy that we maintain ourselves. They are
          prohibited from using your data for their own purposes and must comply with all applicable
          data protection laws and regulations.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">4.3 Banking Partners and Open Banking Providers</h3>
        <p class="text-slate-700 mb-4">
          If you choose to connect your bank account directly to Zoltraa using our token-based
          connection feature (as an alternative to manual statement uploads), we work with regulated
          banking partners and open banking service providers to securely retrieve your transaction
          data. These partners are licensed financial institutions or authorized open banking providers
          that operate under strict regulatory oversight. We share only the minimum information
          necessary to establish and maintain these connections, and all data transfers occur through
          secure, encrypted channels. You can disconnect your bank account at any time, which
          immediately revokes our access to retrieve new transactions.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">4.4 Legal Requirements and Law Enforcement</h3>
        <p class="text-slate-700 mb-3">
          We may disclose your information if we are required to do so by law or if we believe in good
          faith that such disclosure is necessary to comply with legal processes such as a court order,
          subpoena, or search warrant, respond to claims that any content violates the rights of third
          parties, protect the rights, property, or safety of Zoltraa, our users, or the public, or
          comply with regulatory requirements imposed by financial authorities or data protection
          regulators.
        </p>
        <p class="text-slate-700 mb-4">
          Whenever possible and legally permissible, we will notify you before disclosing your
          information in response to legal requests, giving you an opportunity to challenge the request
          if you choose to do so. We carefully review all legal requests to ensure they are valid and
          disclose only the specific information required by law.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">4.5 Business Transfers and Corporate Transactions</h3>
        <p class="text-slate-700 mb-4">
          In the event that Zoltraa is involved in a merger, acquisition, asset sale, bankruptcy, or
          other corporate transaction, your information may be transferred to the acquiring entity or
          successor organization. In such circumstances, we will require the receiving party to honor
          the commitments made in this Privacy Policy and provide you with notice of the transfer and
          any choices you may have regarding your information. Your data will remain subject to
          appropriate confidentiality obligations during and after any such transaction.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">4.6 Aggregated and Anonymized Data</h3>
        <p class="text-slate-700">
          We may create aggregated, anonymized, or de-identified data from the information we collect,
          which cannot be used to identify you personally. This aggregated data may be used for
          research, analytics, product development, and industry reporting purposes. For example, we
          might analyze aggregated spending trends across all users to understand broader economic
          patterns or improve our categorization algorithms. This aggregated data does not contain any
          personally identifiable information and cannot be traced back to individual users.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">5. Data Retention and Security</h2>
        <p class="text-slate-700 mb-4">
          Protecting your financial data is our highest priority. We have implemented comprehensive
          technical and organizational security measures to safeguard your information from
          unauthorized access, disclosure, alteration, and destruction.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">5.1 Data Retention Policies</h3>
        <p class="text-slate-700 mb-3">
          We retain your information only for as long as necessary to provide you with the Service,
          fulfill the purposes described in this Privacy Policy, and comply with legal obligations. Our
          specific retention policies vary depending on the type of data:
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Uploaded Bank Statement Files:</h4>
        <p class="text-slate-700 mb-3">
          As described in detail in Section 2.2, uploaded bank statement PDF files are NEVER stored on
          our servers. These files are processed entirely in memory and are permanently deleted
          immediately after the transaction data has been extracted and encoded—typically within 2 to 3
          minutes of upload. There is no retention period for these files because they are never
          persisted to any storage medium in the first place. Once deleted from memory, the files
          cannot be recovered by anyone, including Zoltraa employees or administrators.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Extracted Transaction Data:</h4>
        <p class="text-slate-700 mb-3">
          The tokenized and encrypted transaction metadata (amount, date, description, and transaction
          reference) that we extract from your bank statements is stored in our secure database for as
          long as you maintain an active account with Zoltraa. This data is essential to providing you
          with the core functionality of the Service—tracking expenses, generating reports, and
          analyzing spending patterns over time. If you delete specific transactions through your
          account interface, they are permanently removed from our database. If you close your account,
          all of your transaction data is permanently deleted as described in Section 6.3 below.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Account Information:</h4>
        <p class="text-slate-700 mb-3">
          Your account and profile information (name, email, contact details) is retained for as long
          as your account remains active. After you close your account, we may retain certain account
          information for a limited period to comply with legal obligations, resolve disputes, enforce
          our agreements, and prevent fraud. Typically, this retention period does not exceed 90 days
          after account closure, unless a longer retention period is required by law or necessary to
          protect our legal interests.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Usage Data and Technical Logs:</h4>
        <p class="text-slate-700 mb-4">
          Technical logs, including IP addresses, access timestamps, and usage patterns, are retained
          for security and troubleshooting purposes. These logs are typically retained for up to 12
          months, after which they are automatically purged from our systems. Security incident logs
          may be retained for longer periods if necessary for ongoing investigations or legal
          proceedings.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">5.2 Encryption and Data Security Measures</h3>
        <p class="text-slate-700 mb-3">
          We employ multiple layers of security controls to protect your data throughout its lifecycle:
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Encryption in Transit:</h4>
        <p class="text-slate-700 mb-3">
          All data transmitted between your device and our servers is protected using industry-standard
          TLS (Transport Layer Security) encryption. This includes bank statement uploads, API
          requests, and any other communication with our Service. TLS encryption ensures that your data
          cannot be intercepted or read by unauthorized parties during transmission over the internet.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Encryption at Rest:</h4>
        <p class="text-slate-700 mb-3">
          All data stored in our databases, including your tokenized transaction metadata and account
          information, is encrypted at rest using strong encryption algorithms. This means that even if
          someone gained unauthorized physical access to our servers or storage media, they would not
          be able to read your data without the encryption keys, which are stored separately and
          protected with additional security controls.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Tokenization:</h4>
        <p class="text-slate-700 mb-3">
          As described earlier, transaction data extracted from your bank statements is immediately
          tokenized before storage. Tokenization replaces sensitive data elements with non-sensitive
          tokens that have no exploitable value. This adds an additional layer of security beyond
          encryption, ensuring that your actual transaction details are protected even within our own
          systems.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Secure File Processing:</h4>
        <p class="text-slate-700 mb-3">
          The in-memory processing of bank statement uploads is a critical security feature. By never
          writing uploaded files to disk, we eliminate entire categories of security risks, including
          unauthorized access to stored files, data leakage through backup systems, forensic recovery
          of deleted files, and exposure through compromised storage infrastructure.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Immediate Deletion Protocols:</h4>
        <p class="text-slate-700 mb-4">
          After transaction data is extracted from an uploaded bank statement, the original file is
          immediately and securely deleted from memory using secure deletion methods that overwrite the
          memory space to prevent any possibility of recovery. This happens automatically and is not
          dependent on any manual action by our staff.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">5.3 Access Controls and Authentication</h3>
        <p class="text-slate-700 mb-3">
          We implement strict access controls to ensure that only authorized personnel can access
          sensitive systems and data. This includes role-based access control (RBAC) that limits
          employee access to only the data and systems necessary for their job functions, multi-factor
          authentication (MFA) required for all administrative access to production systems, regular
          access reviews and audits to ensure that permissions remain appropriate, immediate revocation
          of access when employees leave the company or change roles, and comprehensive audit logging
          of all access to sensitive data and systems.
        </p>
        <p class="text-slate-700 mb-4">
          For your own account security, we strongly recommend that you enable two-factor
          authentication (2FA) and use a strong, unique password that you do not use for any other
          service.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">5.4 Security Monitoring and Incident Response</h3>
        <p class="text-slate-700 mb-3">
          We continuously monitor our systems for security threats, vulnerabilities, and suspicious
          activities. Our security program includes automated intrusion detection systems that alert us
          to potential attacks, regular vulnerability assessments and penetration testing by
          independent security experts, real-time monitoring of system logs for anomalous behavior,
          security patches and updates applied promptly to address known vulnerabilities, and a formal
          incident response plan that defines how we detect, contain, and remediate security incidents.
        </p>
        <p class="text-slate-700 mb-4">
          In the unlikely event of a data breach that affects your information, we will notify you
          promptly in accordance with applicable laws and regulations, provide you with information
          about what happened and what data was affected, and offer guidance on steps you can take to
          protect yourself.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">5.5 Compliance and Certifications</h3>
        <p class="text-slate-700 mb-3">
          While we have not explicitly mentioned specific compliance frameworks like PCI-DSS or SOC 2
          in your requirements, we want to assure you that our security practices are designed to align
          with industry best practices and regulatory expectations for handling financial data.
        </p>
        <p class="text-slate-700 mb-4">
          We regularly review and update our security policies and procedures to reflect evolving
          threats, new technologies, and changes in regulatory requirements. Our goal is to maintain a
          security posture that meets or exceeds the standards expected of financial technology
          companies.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">5.6 Employee Training and Awareness</h3>
        <p class="text-slate-700 mb-4">
          All Zoltraa employees undergo mandatory security awareness training to understand the
          importance of data protection, recognize security threats, and follow secure practices in
          their daily work. Employees with access to sensitive systems receive additional specialized
          training. We foster a culture of security awareness throughout our organization, ensuring
          that protecting your data is everyone's responsibility.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">5.7 Physical Security</h3>
        <p class="text-slate-700">
          While our application and data infrastructure is cloud-based, we rely on reputable cloud
          providers that maintain robust physical security controls at their data centers, including
          24/7 security personnel, biometric access controls, video surveillance, environmental
          controls to prevent equipment damage, and redundant power and network connectivity to ensure
          availability. We carefully select cloud providers that hold relevant security certifications
          and comply with international data protection standards.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
        <p class="text-slate-700 mb-4">
          You have significant control over your personal information and how it is used within the
          Zoltraa Service. We respect your rights and provide you with the tools and mechanisms to
          exercise those rights effectively.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.1 Access to Your Information</h3>
        <p class="text-slate-700 mb-4">
          You have the right to access the personal information we hold about you. Through your account
          dashboard, you can view your profile information, review all stored transaction data, see
          your account activity history, and access reports and insights generated from your data.
          If you need a comprehensive copy of all personal information we hold about you, you can
          submit a formal data access request by contacting us at privacy@zoltraa.example. We will
          respond to your request within 30 days and provide you with a structured, machine-readable
          export of your data.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.2 Correction and Updates</h3>
        <p class="text-slate-700 mb-4">
          You have the right to correct any inaccurate or incomplete personal information we hold about
          you. You can update your profile information (name, email, contact details) directly through
          your account settings at any time. For transaction data, you can edit transaction
          descriptions or categories through the transaction management interface. If you believe other
          information we hold is inaccurate and you cannot correct it yourself, please contact us and
          we will investigate and make necessary corrections.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.3 Data Deletion and the Right to Be Forgotten</h3>
        <p class="text-slate-700 mb-3">
          You have the right to request deletion of your personal information, subject to certain legal
          limitations. You can exercise this right in several ways:
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Deleting Individual Transactions:</h4>
        <p class="text-slate-700 mb-3">
          You can delete individual transactions or groups of transactions at any time through your
          account interface. When you delete a transaction, it is permanently removed from our database
          and cannot be recovered. This gives you granular control over what data you want to retain.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Account Closure and Complete Data Deletion:</h4>
        <p class="text-slate-700 mb-3">
          You can close your Zoltraa account at any time by accessing the account settings and
          selecting the option to close your account. When you close your account, all of your personal
          information and transaction data is permanently deleted from our active systems within 30
          days. This includes your profile information, all stored transaction metadata, usage history
          and preferences, and any other data associated with your account.
        </p>
        <p class="text-slate-700 mb-3">
          Please note that we may retain certain information for a limited period after account closure
          if required by law, necessary to resolve disputes, enforce our agreements, or prevent fraud.
          However, this retention period typically does not exceed 90 days, and the retained
          information is securely isolated and not used for any operational purposes.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Requesting Expedited Deletion:</h4>
        <p class="text-slate-700 mb-4">
          If you need your data deleted more urgently than the standard 30-day account closure process,
          you can submit a formal deletion request to privacy@zoltraa.example. We will prioritize your
          request and complete the deletion within 7 business days, subject to any legal obligations
          that may require us to retain certain information.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.4 Data Portability</h3>
        <p class="text-slate-700 mb-4">
          While we do not currently offer an automated data export feature that allows you to download
          your transaction data in a portable format, you have the right to request a copy of your data
          for transfer to another service. If you wish to export your data, please contact us at
          privacy@zoltraa.example with your request. We will provide you with a structured export of
          your transaction data in a commonly used format (such as CSV or JSON) within 30 days. Please
          note that this export will include only the transaction metadata we store (amount, date,
          description, transaction reference)—we cannot provide the original bank statement files as
          these are never stored in our systems.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.5 Restriction of Processing</h3>
        <p class="text-slate-700 mb-4">
          In certain circumstances, you have the right to restrict how we process your personal
          information. This means we will store your data but not actively use it for any purposes. You
          might request restriction of processing if you contest the accuracy of your data and want us
          to pause processing while we verify its accuracy, you believe our processing is unlawful but
          you prefer restriction rather than deletion, we no longer need the data but you need us to
          retain it for legal claims, or you have objected to processing and are awaiting verification
          of whether our legitimate interests override your objection. To request restriction of
          processing, please contact us at privacy@zoltraa.example. We will respond to your request
          within 30 days.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.6 Objection to Processing</h3>
        <p class="text-slate-700 mb-4">
          You have the right to object to certain types of processing of your personal information,
          particularly processing based on our legitimate interests. If you object to processing, we
          will stop processing your information unless we can demonstrate compelling legitimate grounds
          for the processing that override your interests, rights, and freedoms, or the processing is
          necessary for legal claims. To object to processing, please contact us at
          privacy@zoltraa.example with details about what processing you are objecting to and why.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.7 Communication Preferences</h3>
        <p class="text-slate-700 mb-4">
          You have control over the communications you receive from us. You can opt out of promotional
          emails by clicking the "unsubscribe" link at the bottom of any marketing email we send you,
          or by adjusting your communication preferences in your account settings. Please note that
          even if you opt out of promotional communications, we will still send you transactional
          emails related to your account, such as security alerts, password reset confirmations, and
          important service updates that are necessary for the operation of your account.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.8 Cookie Preferences</h3>
        <p class="text-slate-700 mb-4">
          You can control cookie preferences through your browser settings. Most browsers allow you to
          block all cookies, accept only certain cookies, or receive notifications when cookies are
          being set. Please note that if you block essential cookies, some features of the Service may
          not function properly. For more information about our use of cookies and how to manage them,
          please see our separate Cookies Policy.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.9 Location Data Permissions</h3>
        <p class="text-slate-700 mb-4">
          If you have granted us permission to access your location data, you can revoke this
          permission at any time through your device settings (for mobile apps) or browser settings
          (for web access). Revoking location permissions will not affect your ability to use the core
          features of the Service, but may impact certain location-based features or security measures.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">6.10 Exercising Your Rights</h3>
        <p class="text-slate-700 mb-3">
          To exercise any of the rights described in this section, you can contact us at
          privacy@zoltraa.example. When submitting a request, please provide sufficient information to
          allow us to verify your identity and locate your account. This typically includes your name,
          email address associated with your account, and a description of the specific right you wish
          to exercise.
        </p>
        <p class="text-slate-700 mb-3">
          We will respond to all requests within 30 days of receipt. If your request is particularly
          complex or you have made multiple requests, we may extend this period by up to 60 additional
          days, in which case we will notify you of the extension and explain the reason for the delay.
        </p>
        <p class="text-slate-700">
          There is no charge for exercising your rights unless your requests are manifestly unfounded,
          excessive, or repetitive, in which case we may charge a reasonable administrative fee or
          decline to act on the request.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
        <p class="text-slate-700 mb-3">
          We use cookies and similar tracking technologies to enhance your experience with the Zoltraa
          Service, remember your preferences, keep you logged in, and understand how you use our
          platform.
        </p>
        <p class="text-slate-700 mb-4">
          A cookie is a small text file that is stored on your device when you visit a website. Cookies
          allow websites to recognize your device, remember your preferences, and provide you with a
          more personalized and seamless experience across multiple visits.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">7.1 Types of Cookies We Use</h3>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Essential Cookies:</h4>
        <p class="text-slate-700 mb-3">
          These cookies are necessary for the Service to function properly and cannot be disabled
          without severely impacting your ability to use the platform. Essential cookies enable core
          functionality such as user authentication (keeping you logged in), security features
          (protecting against cross-site request forgery attacks), session management (maintaining your
          session state as you navigate the Service), and load balancing (ensuring requests are routed
          to the appropriate servers). Without these cookies, many features of the Service would not
          work correctly.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Functional Cookies:</h4>
        <p class="text-slate-700 mb-3">
          Functional cookies remember your preferences and settings to provide you with a more
          personalized experience. These include cookies that remember your preferred language,
          currency, and display settings, store your dashboard layout preferences and customizations,
          remember whether you've seen certain notices or tutorials, and save your filter and sorting
          preferences. Functional cookies enhance usability but are not strictly necessary for the
          Service to operate.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Analytics Cookies:</h4>
        <p class="text-slate-700 mb-3">
          We use analytics cookies to understand how users interact with the Service and identify
          opportunities for improvement. These cookies collect anonymized information about page views,
          navigation patterns, feature usage, time spent on different pages, and error messages or
          issues encountered. This data helps us improve the user experience, fix bugs, optimize
          performance, and develop new features that users need. Analytics cookies do not collect
          personally identifiable information and the data is aggregated across all users.
        </p>

        <h4 class="text-lg font-semibold mb-2 text-slate-800">Security Cookies:</h4>
        <p class="text-slate-700 mb-4">
          Security cookies help us detect and prevent fraudulent activity and protect your account from
          unauthorized access. These cookies enable us to detect suspicious login patterns, verify that
          requests are coming from legitimate users, implement rate limiting to prevent abuse, and
          enforce security policies such as session timeouts. Security cookies are essential to
          maintaining the safety and integrity of the Service.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">7.2 Third-Party Cookies</h3>
        <p class="text-slate-700 mb-4">
          We do not use third-party advertising cookies or allow advertisers to place cookies on our
          Service. However, we may use third-party service providers for essential functions such as
          analytics and security monitoring, and these providers may set their own cookies. Any
          third-party cookies are subject to the privacy policies of those third parties, and we
          encourage you to review those policies to understand how your information is used.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">7.3 Cookie Duration</h3>
        <p class="text-slate-700 mb-4">
          Cookies may be session cookies (which expire when you close your browser) or persistent
          cookies (which remain on your device until they expire or you delete them). We use both types
          depending on the purpose of the cookie. Session cookies are used for authentication and
          security, while persistent cookies are used to remember your preferences and improve your
          experience across multiple visits.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">7.4 Managing Cookie Preferences</h3>
        <p class="text-slate-700 mb-3">
          You can control and manage cookies through your browser settings. Most modern browsers allow
          you to block all cookies, accept only first-party cookies, receive notifications when cookies
          are being set, or delete existing cookies. The process for managing cookies varies by
          browser, but is typically found in the privacy or security settings section.
        </p>
        <p class="text-slate-700 mb-3">
          Please be aware that if you block or delete essential cookies, you may not be able to use
          certain features of the Service, and your experience may be significantly degraded. Blocking
          functional or analytics cookies will not prevent you from using the Service, but may affect
          the personalization and quality of your experience.
        </p>
        <p class="text-slate-700 mb-4">
          For more detailed information about cookies, including how to see what cookies have been set
          on your device and how to manage and delete them, visit www.allaboutcookies.org or
          www.youronlinechoices.com.
        </p>

        <h3 class="text-xl font-semibold mb-3 text-slate-800">7.5 Other Tracking Technologies</h3>
        <p class="text-slate-700">
          In addition to cookies, we may use other tracking technologies such as web beacons (also
          known as pixel tags or clear GIFs) and local storage. Web beacons are tiny graphics with a
          unique identifier that are embedded in emails or web pages to track whether content has been
          viewed. Local storage is a technology that allows websites to store data on your device
          similar to cookies but with greater capacity. We use these technologies for similar purposes
          as cookies, including analytics, security, and improving the Service.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">8. International Transfers</h2>
        <p class="text-slate-700 mb-3">
          Zoltraa is a global service, and your information may be transferred to, stored in, and
          processed in countries other than your country of residence. These countries may have data
          protection laws that differ from the laws of your country.
        </p>
        <p class="text-slate-700 mb-4">
          When we transfer your information internationally, we take appropriate steps to ensure that
          your data receives adequate protection and that the transfer complies with applicable data
          protection laws. Our safeguards include implementing standard contractual clauses approved by
          relevant regulatory authorities, working only with service providers that maintain adequate
          data protection standards, conducting privacy impact assessments for high-risk transfers,
          ensuring encryption of data in transit and at rest regardless of geographic location, and
          regularly reviewing and updating our data transfer practices to reflect changes in
          international data protection requirements.
        </p>
        <p class="text-slate-700 mb-4">
          If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we
          ensure that transfers of personal data to countries outside these regions are protected by
          appropriate safeguards as required by the General Data Protection Regulation (GDPR) and other
          applicable laws. These safeguards may include the use of standard contractual clauses,
          adequacy decisions by the European Commission recognizing certain countries as providing
          adequate protection, or other legally recognized transfer mechanisms.
        </p>
        <p class="text-slate-700">
          If you have questions about international transfers of your data or would like more
          information about the specific safeguards we have implemented, please contact us at
          privacy@zoltraa.example.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">9. Children's Privacy</h2>
        <p class="text-slate-700 mb-3">
          The Zoltraa Service is not intended for use by individuals under the age of 18, or the age
          of majority in their jurisdiction, whichever is higher. We do not knowingly collect personal
          information from children. Financial services such as expense tracking and bank statement
          analysis are designed for adults who manage their own finances.
        </p>
        <p class="text-slate-700 mb-3">
          If we become aware that we have inadvertently collected personal information from a child
          under 18 without proper parental consent, we will take immediate steps to delete that
          information from our systems. If you are a parent or guardian and believe that your child has
          provided personal information to us, please contact us at privacy@zoltraa.example and we will
          promptly investigate and delete the information.
        </p>
        <p class="text-slate-700">
          We take the protection of children's privacy seriously and maintain processes to verify the
          age of users where appropriate and prevent unauthorized account creation by minors.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
        <p class="text-slate-700 mb-3">
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, legal requirements, or other operational, legal, or regulatory reasons. When we
          make changes, we will update the "Effective date" at the top of this policy to indicate when
          the changes take effect.
        </p>
        <p class="text-slate-700 mb-3">
          If we make material changes to this Privacy Policy that significantly affect your rights or
          how we use your information, we will provide you with prominent notice before the changes
          take effect. This may include sending you an email notification to the email address
          associated with your account, displaying a prominent notice on our website or within the
          Service, or using other appropriate communication channels.
        </p>
        <p class="text-slate-700 mb-3">
          We encourage you to review this Privacy Policy periodically to stay informed about how we
          protect your information and the choices available to you. Your continued use of the Service
          after changes to the Privacy Policy have been posted constitutes your acceptance of the
          updated policy.
        </p>
        <p class="text-slate-700">
          If you do not agree with any changes to the Privacy Policy, you may close your account at any
          time by following the account closure process described in Section 6.3.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">11. Your California Privacy Rights</h2>
        <p class="text-slate-700 mb-3">
          If you are a California resident, you have specific rights under the California Consumer
          Privacy Act (CCPA) and the California Privacy Rights Act (CPRA) regarding your personal
          information.
        </p>
        <p class="text-slate-700 mb-4">
          These rights include the right to know what personal information we collect, use, disclose,
          and sell about you, the right to request deletion of your personal information subject to
          certain exceptions, the right to opt-out of the sale or sharing of your personal information
          (note: we do not sell your personal information), the right to correct inaccurate personal
          information, the right to limit the use and disclosure of sensitive personal information, and
          the right to non-discrimination for exercising your privacy rights.
        </p>
        <p class="text-slate-700 mb-3">
          To exercise any of these rights, please contact us at privacy@zoltraa.example. We will
          respond to verifiable consumer requests within 45 days as required by law. We may extend this
          period by an additional 45 days when reasonably necessary, in which case we will notify you
          of the extension and the reason for it.
        </p>
        <p class="text-slate-700">
          We do not sell personal information, and we do not discriminate against users who exercise
          their privacy rights. You have the right to designate an authorized agent to submit requests
          on your behalf, subject to verification requirements.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">12. Your European Privacy Rights</h2>
        <p class="text-slate-700 mb-3">
          If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you
          have additional rights under the General Data Protection Regulation (GDPR) and equivalent
          local laws.
        </p>
        <p class="text-slate-700 mb-4">
          In addition to the rights described throughout this Privacy Policy, you have the right to
          lodge a complaint with your local data protection authority if you believe we have not
          complied with applicable data protection laws, the right to withdraw consent at any time
          where we rely on consent as the legal basis for processing your information, the right to
          object to processing based on legitimate interests, and the right to receive information
          about the legal basis for each processing activity.
        </p>
        <p class="text-slate-700 mb-4">
          We process your personal information based on several legal bases, including performance of a
          contract (to provide the Service you have requested), legitimate interests (to improve the
          Service, prevent fraud, and ensure security), legal obligations (to comply with applicable
          laws), and consent (where we have asked for and received your specific consent).
        </p>
        <p class="text-slate-700">
          For questions about our processing of your information or to exercise your rights under the
          GDPR, please contact us at privacy@zoltraa.example.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">13. Contact Us</h2>
        <p class="text-slate-700 mb-3">
          If you have questions, concerns, or complaints about this Privacy Policy or how we handle
          your information, we encourage you to contact us. We take all privacy inquiries seriously and
          will investigate and respond to your concerns promptly.
        </p>
        <p class="text-slate-700 mb-4">
          You can reach us at:
        </p>
        <div class="pl-6 mb-4">
          <p class="text-slate-700 mb-1">
            <span class="font-semibold">Email:</span> privacy@zoltraa.example
          </p>
          <p class="text-slate-700 mb-1">
            <span class="font-semibold">Subject Line:</span> Privacy Inquiry - [Your Issue]
          </p>
          <p class="text-slate-700">
            <span class="font-semibold">Response Time:</span> We aim to respond to all privacy
            inquiries within 5 business days, and to resolve most issues within 30 days.
          </p>
        </div>
        <p class="text-slate-700 mb-3">
          When contacting us, please provide as much detail as possible about your question or concern,
          including your account email address (to help us locate your account), a description of the
          issue or request, and any relevant supporting information or documentation. This will help us
          address your inquiry more efficiently and effectively.
        </p>
        <p class="text-slate-700 mb-4">
          We value your feedback and are committed to maintaining your trust. If you believe we have
          not adequately addressed your privacy concerns, you have the right to contact your local data
          protection authority or seek other legal remedies available to you.
        </p>
        <p class="text-slate-700">
          Thank you for trusting Zoltraa with your financial data. We are committed to protecting your
          privacy and providing you with transparent, secure, and user-friendly expense tracking
          services.
        </p>
      </section>
    </div>
  </section>
</template>

<script setup>
defineEmits(['navigateBack'])
</script>

<style scoped>
/* Reuse existing button styles for consistency */
.glow-button {
  box-shadow: 0 0 15px rgba(43, 124, 238, 0.4);
  transition: all 0.3s ease;
}
.glow-button:hover {
  box-shadow: 0 0 25px rgba(43, 124, 238, 0.6);
  transform: translateY(-1px);
}
</style>
