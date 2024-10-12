public ngOnChanges(changes: any): void {
    this.creditCheck = changes?.creditCheck?.currentValue;
    if(this.dollarLimit && changes?.creditCheck?.currentValue) {
        const financedAmountUsed = this.creditCheck?.creditOfferMetaInfo?.account.financedAmountOnAccount + this.creditCheck?.creditOfferMetaInfo?.cartInfo.financedAmountInCart;
        const amountRemaining = this.creditCheck?.creditOfferMetaInfo?.offeredDollarLimit - financedAmountUsed;
        this.selectedOfferInfo = (this.customerService.checkEccSavedForNewCustomer() || this.customerService.checkEccSavedForExistingCustomer()) ? true : false;
        this.errorFlagForDollarLimit = amountRemaining <= 100 ? true : false;
        if(sessionStorage.getItem('creditCheckApiData')) {
            const creditCheckData = JSON.parse(sessionStorage.getItem('creditCheckApiData'));
            if(creditCheckData?.creditOfferMetaInfo?.offeredDollarLimit !== this.creditCheck?.creditOfferMetaInfo?.offeredDollarLimit ||
                creditCheckData?.creditOfferMetaInfo?.account.financedAmountOnAccount !== this.creditCheck?.creditOfferMetaInfo?.account.financedAmountOnAccount ||
                creditCheckData?.creditOfferMetaInfo?.cartInfo.financedAmountInCart !== this.creditCheck.creditOfferMetaInfo?.cartInfo.financedAmountInCart) {
                    this.warningFlagForDollarLimit = true;
                } else {
                    this.warningFlagForDollarLimit = false;
                }
                sessionStorage.setItem('creditCheckApiData', JSON.stringify(this.creditCheck));
        } else {
            sessionStorage.setItem('creditCheckApiData', JSON.stringify(this.creditCheck));
        }
    }
}