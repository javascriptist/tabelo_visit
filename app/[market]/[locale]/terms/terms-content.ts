import type { PolicySection } from '../privacy/policy-content'

/**
 * The Terms of Service body. English only for now: unlike the privacy policy,
 * which staff have a right to read in their own language, these terms bind the
 * Organisation that signs up, and a translation should follow a legal review
 * of the English rather than precede it.
 *
 * THIS HAS NOT HAD A LEGAL REVIEW. In particular it names no governing law or
 * jurisdiction, and the paid-module terms describe the current request-based
 * flow, not online billing.
 */

export const TERMS_EFFECTIVE_DATE = 'October 9, 2026'

export const TERMS = {
  title: 'Terms of Service',
  effectiveDateLabel: 'Effective date',
  backHome: 'Back home',
  metaTitle: 'Terms of Service — Tabelo',
  metaDescription: 'The terms that apply when an organisation and its staff use Tabelo.',
  sections: [
    {
      blocks: [
        {
          kind: 'p',
          text: 'These Terms of Service ("Terms") govern use of Tabelo, the workforce management platform provided by Bilig Labs ("Bilig Labs", "we", "us"), including the Tabelo web dashboard and the Tabelo Staff mobile app (together, the "Service"). By creating an account for a business ("Organisation"), you agree to these Terms on behalf of that Organisation and confirm you are authorised to do so. Staff members invited by an Organisation use the Service under that Organisation’s account.',
        },
      ],
    },
    {
      heading: '1. Accounts',
      blocks: [
        {
          kind: 'ul',
          items: [
            'You must give accurate information when you register and keep it up to date.',
            'You are responsible for keeping login details confidential and for activity under your Organisation’s account.',
            'The Organisation decides who in its team gets access and what they can see, and is responsible for removing access when someone leaves.',
          ],
        },
      ],
    },
    {
      heading: '2. Your Organisation’s Responsibilities for Staff Data',
      blocks: [
        {
          kind: 'p',
          text: 'The Organisation is the data controller for its staff’s employment records, and we process that data on its behalf as described in our Privacy Policy. The Organisation is responsible for:',
        },
        {
          kind: 'ul',
          items: [
            'having a lawful basis under its local law for the staff data it enters or collects through the Service;',
            'telling its staff how Tabelo is used at work, including location checks at clock-in and, where enabled, photo and face check-in;',
            'obtaining any consent its local law requires before enabling face check-in, including any additional consent required for staff below the age of majority.',
          ],
        },
      ],
    },
    {
      heading: '3. Acceptable Use',
      blocks: [
        { kind: 'p', text: 'You must not, and must not let others:' },
        {
          kind: 'ul',
          items: [
            'use the Service unlawfully, or to monitor people in a way your local law does not allow;',
            'upload content you do not have the right to share, or content that is unlawful, harmful, or infringes someone else’s rights;',
            'try to access data belonging to another Organisation, or probe, disrupt, or overload the Service;',
            'copy, resell, or reverse engineer the Service except where the law expressly allows it.',
          ],
        },
      ],
    },
    {
      heading: '4. Your Content',
      blocks: [
        {
          kind: 'p',
          text: 'Your Organisation keeps ownership of the content it and its staff put into the Service, such as schedules, checklists, training materials, menus, and photos. You give us permission to host, process, and display that content only as needed to provide the Service to you.',
        },
      ],
    },
    {
      heading: '5. Copyright Complaints',
      blocks: [
        {
          kind: 'contact',
          before:
            'Content uploaded to Tabelo is visible only within the Organisation that uploaded it. If you believe content in the Service infringes your copyright, email us at ',
          after:
            ' with a description of the work, where the content appears, your contact details, and a statement that you believe in good faith the use is not authorised. We will review the notice, remove or disable the content where appropriate, and tell the Organisation that uploaded it.',
        },
      ],
    },
    {
      heading: '6. AI Features',
      blocks: [
        {
          kind: 'p',
          text: 'Dono opa, the in-app assistant, and the AI-generated digests are produced by artificial intelligence, not by a person. Their answers are based on the material your Organisation provides and can be incomplete or wrong. Do not rely on them for allergen, food-safety, health, legal, or payroll decisions without checking the source material.',
        },
      ],
    },
    {
      heading: '7. Paid Modules',
      blocks: [
        {
          kind: 'p',
          text: 'Some modules are paid add-ons. You request a paid module from the dashboard, and it is activated only once we have agreed the price and billing terms with you. You can cancel a paid module at any time by contacting us; it stays available until the end of the period already paid for, and no further charges are made after that.',
        },
      ],
    },
    {
      heading: '8. Availability and Changes',
      blocks: [
        {
          kind: 'p',
          text: 'We work to keep the Service available and secure, but we do not promise it will be uninterrupted or error-free. We may change or improve features over time. If we make a change that materially reduces what a paid module does, we will tell you in advance.',
        },
      ],
    },
    {
      heading: '9. Suspension and Termination',
      blocks: [
        {
          kind: 'p',
          text: 'You can stop using the Service and ask us to close your Organisation’s account at any time. We may suspend or close an account that breaches these Terms or puts the Service or other users at risk, and will give notice where we reasonably can. After closure we delete or anonymise your Organisation’s data within a reasonable period, except where we must keep it to meet legal obligations.',
        },
      ],
    },
    {
      heading: '10. Disclaimers and Liability',
      blocks: [
        {
          kind: 'p',
          text: 'To the extent the law allows, the Service is provided "as is", and we are not liable for indirect or consequential losses, or for losses caused by inaccurate data entered by you or your staff. Nothing in these Terms limits liability that cannot be limited by law.',
        },
      ],
    },
    {
      heading: '11. Changes to These Terms',
      blocks: [
        {
          kind: 'p',
          text: 'We may update these Terms from time to time. Material changes will be reflected by updating the effective date above, and we will notify account owners of changes that affect their rights.',
        },
      ],
    },
    {
      heading: '12. Contact Us',
      blocks: [
        { kind: 'contact', before: 'Questions about these Terms? Email us at ', after: '.' },
      ],
    },
  ] satisfies PolicySection[],
}
