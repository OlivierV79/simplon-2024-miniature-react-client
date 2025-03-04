module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm start',
            url: ['http://localhost:3000'],
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 1 }],
                'categories:accessibility': ['error', { minScore: 1 }],
                'categories:best-practices': ['error', { minScore: 1 }],
                'categories:seo': ['error', { minScore: 1 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};