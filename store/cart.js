export const state = () => ({
    added: [],
    all: [
        {
            id: '1',
            stripeId: 'price_1IgzSLBPiAffrwryjZblkFhM',
            name: 'DISC Group Certification',
            price: '159500',
            slug: 'disc-group-certification'
        },
        {
            id: '2',
            stripeId: 'price_1I6dd4BPiAffrwry1TMNJ3YR',
            name: 'DISCStyles Assessment (5 Pack)',
            price: '7500',
            slug: 'hrd-press-discstyles'
        },
        {
            id: '3',
            stripeId: 'price_1I6ddRBPiAffrwryvXYASANa',
            name: 'The DISC Laminated Summary Card',
            price: '600',
            slug: 'disc-summary-card'
        },
        {
            id: '4',
            stripeId: 'price_1I8SHeBPiAffrwrybwJPSTrr',
            name: 'The Platinum Rule Paper Assessment',
            price: '1000',
            slug: 'platinum-rule-assessment'
        },
        {
            id: '5',
            stripeId: 'price_1I8SIABPiAffrwryszKH9TO0',
            name: 'The Platinum Rule Scoring Booklet',
            price: '1200',
            slug: 'platinum-rule-scoring-booklet'
        },
        {
            id: '6',
            stripeId: 'price_1I8SIVBPiAffrwryc6vmDBM7',
            name: 'The Platinum Rule Reminder Card',
            price: '600',
            slug: 'platinum-rule-reminder-card'
        }
    ]
});

export const getters = {
    allProducts: state => state.all,
    getNumberOfProducts: state => (state.all) ? state.all.length : 0,
    getNumberOfCartItems: state => {
        let total = 0;

        for (let item of state.added) {
            total += item.quantity;
        }

        return total;
    },
    cartProducts: state => {
        return state.added.map(({ id, quantity }) => {
            const product = state.all.find(p => p.id === id);

            return {
                id: product.id,
                stripeId: product.stripeId,
                name: product.name,
                price: product.price,
                slug: product.slug,
                quantity
            }
        });
    }
};

export const mutations = {
    ADD_TO_CART(state, { id }) {
        const record = state.added.find(p => p.id === id);

        if (!record) {
            state.added.push({
                id,
                quantity: 1
            });
        } else {
            record.quantity++;
        }
    },
    REMOVE_FROM_CART(state, { id }) {
        state.added = state.added.filter(p => p.id !== id);
    },
    CHANGE_QUANTITY(state, { id, quantity }) {
        state.added = state.added.map(p => (p.id === id ? { ...p, quantity } : p));
    }
};

export const actions = {
    addToCart({ commit }, product) {
        commit('ADD_TO_CART', {
            id: product.id
        });
    },
    removeFromCart({ commit }, product) {
        commit('REMOVE_FROM_CART', {
            id: product.id
        });
    },
    changeQuantity({ commit }, product) {
        product.quantity = parseInt(product.quantity);
        if (Number.isInteger(product.quantity) && product.quantity >= 0) {
            commit('CHANGE_QUANTITY', {
                id: product.id,
                quantity: product.quantity
            });
        }
    }
};
