export interface FAQItem {
  question: string;
  answer: string;
}

export function getSoftwareApplicationSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': name,
    'operatingSystem': 'All',
    'applicationCategory': 'EducationalApplication',
    'description': description,
    'offers': {
      '@type': 'Offer',
      'price': '0.00',
      'priceCurrency': 'USD'
    },
    'url': url
  };
}

export function getArticleSchema(title: string, description: string, url: string, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'image': image || 'https://fourpillarscalculator.com/og-image.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'Imperial BaZi'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Imperial BaZi',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://fourpillarscalculator.com/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    }
  };
}

export function getHowToSchema(title: string, description: string, url: string, steps: Array<{ name: string; text: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': title,
    'description': description,
    'url': url,
    'step': steps.map((step, idx) => ({
      '@type': 'HowToStep',
      'position': idx + 1,
      'name': step.name,
      'text': step.text
    }))
  };
}

export function getFAQPageSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function getCollectionPageSchema(title: string, description: string, url: string, items: Array<{ name: string; url: string; description: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': title,
    'description': description,
    'url': url,
    'hasPart': items.map((item, idx) => ({
      '@type': 'WebPage',
      'position': idx + 1,
      'name': item.name,
      'url': item.url,
      'description': item.description
    }))
  };
}

export function getDefinedTermSetSchema(title: string, description: string, url: string, terms: Array<{ term: string; definition: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    'name': title,
    'description': description,
    'url': url,
    'hasDefinedTerm': terms.map(t => ({
      '@type': 'DefinedTerm',
      'name': t.term,
      'description': t.definition
    }))
  };
}

