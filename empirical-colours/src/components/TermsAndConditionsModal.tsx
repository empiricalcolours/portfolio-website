import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';

interface TermsAndConditionsModalProps {
  open: boolean;
  onClose: () => void;
}

const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: {
          backgroundColor: '#F9F5F2',
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: 'Mulegh, sans-serif',
          fontWeight: 400,
          fontSize: '2rem',
          textAlign: 'center',
          color: 'black',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        Terms and Conditions
      </DialogTitle>
      <DialogContent dividers sx={{ borderColor: 'rgba(0,0,0,0.1)' }}>
        <Box sx={{ fontFamily: 'Fira Sans, sans-serif', '& .MuiTypography-root': { fontFamily: 'Fira Sans, sans-serif', fontWeight: 400 }, color: 'black', py: 2 }}>
          <Typography variant="body1" paragraph>
            Welcome to empiricalcolours.art (the “Site”), an online platform operated by Rudrani (she/her) (the “Artist”), where users (“you” or “your”) may browse and purchase artworks created by the Artist. These Terms and Conditions (“Terms”) govern your access to and use of the Site, including all content, functionality, and services offered through the Site.
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing the Site or purchasing any artwork, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Site.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>1. Eligibility</Typography>
          <Typography variant="body1" paragraph>
            You must be at least 18 years of age, or the age of majority in your jurisdiction, to use the Site. By using the Site, you represent and warrant that you meet this eligibility requirement and have the legal capacity to enter into these Terms.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>2. User Information</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>2.1 Information Provided by Users</Typography>
          <Typography variant="body1" paragraph>
            To make a purchase or access certain features of the Site, you may be required to provide certain information, including your name, email address, contact details, and KYC-related information. You agree to provide accurate, current, and complete information and to update such information whenever necessary.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>3. Orders and Purchase Process</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>3.1 Inquiry and Order Process</Typography>
          <Typography variant="body1" paragraph>
            Users may browse available artworks on the Site and contact the Artist regarding any artwork inquiry through:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Email: empiricalcolours@gmail.com</li>
            <li>Instagram: @empiricalcolours</li>
            <li>The contact form available on the Site</li>
          </Box>
          <Typography variant="body1" paragraph>
            Once the Artist and the buyer mutually agree upon the specifications of an order, the buyer shall make payment for the agreed amount, and the Artist shall deliver the artwork accordingly.
          </Typography>
          <Typography variant="body1" paragraph>
            As the Artist independently manages all operations, buyers are requested to allow up to 24 hours for a response. For urgent orders, buyers should clearly communicate delivery requirements at the initial stage of inquiry.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>3.2 Commissioned Artwork</Typography>
          <Typography variant="body1" paragraph>
            Terms relating to commissioned artworks, including pricing, timelines, revisions, and deliverables, shall be agreed upon separately between the Artist and the buyer.
          </Typography>
          <Typography variant="body1" paragraph>
            A non-refundable advance payment may be required before commencement of commissioned work. Cancellation of a commissioned artwork after work has commenced may result in forfeiture of the advance payment.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>3.3 Order Acceptance</Typography>
          <Typography variant="body1" paragraph>
            All artwork listings on the Site constitute invitations to offer and not offers for sale by the Artist. Any order placed by a user constitutes an offer to purchase. The Artist reserves the right to refuse or cancel any order for any reason, including but not limited to:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Artwork unavailability</li>
            <li>Pricing errors</li>
            <li>Suspected fraudulent activity</li>
          </Box>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>3.4 Pricing</Typography>
          <Typography variant="body1" paragraph>
            All prices are listed in Indian Rupees (INR) unless otherwise stated. Prices do not include applicable taxes, shipping charges, customs duties, or handling fees, which may be charged separately.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>4. Payment</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>4.1 Payment Methods</Typography>
          <Typography variant="body1" paragraph>
            Payments shall be made via bank transfer or UPI using the payment details provided by the Artist. By placing an order, you agree to pay all applicable charges, including taxes and shipping fees.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>4.2 Finality of Sale</Typography>
          <Typography variant="body1" paragraph>
            All sales are considered final upon shipment unless otherwise stated under the Returns and Refunds policy below.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>5. Shipping and Delivery</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>5.1 Shipping Policy</Typography>
          <Typography variant="body1" paragraph>
            Artworks shall be shipped to the address provided by the buyer. Shipping timelines may vary depending on the delivery location.
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Domestic deliveries within India shall generally be made through India Post or other suitable courier services selected by the Artist.</li>
            <li>International shipping is available. Buyers shall bear all shipping charges, customs duties, taxes, import fees, and related expenses.</li>
          </Box>
          <Typography variant="body1" paragraph>
            Pickup services are also available for buyers located in Mumbai.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>5.2 Risk of Loss</Typography>
          <Typography variant="body1" paragraph>
            Risk of loss or damage to the artwork passes to the buyer upon delivery of the artwork to the shipping carrier. Buyers are responsible for inspecting shipments promptly upon receipt and notifying the Artist of any issues within a reasonable time.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>5.3 Care and Handling of Artwork</Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Buyers are expected to handle and store artworks with appropriate care.</li>
            <li>The Artist shall not be responsible for damage caused due to mishandling, improper storage, exposure to moisture, heat, sunlight, or other environmental factors after delivery.</li>
            <li>Requests for repairs may be considered solely at the Artist’s discretion and may involve additional charges.</li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>6. Returns and Refunds</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>6.1 Returns</Typography>
          <Typography variant="body1" paragraph>
            Due to the unique nature of the artworks, returns shall only be accepted in cases involving:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Documented physical damage during transit; or</li>
            <li>Material misrepresentation of the artwork</li>
          </Box>
          <Typography variant="body1" paragraph>
            Any such issue must be reported within 7 days of delivery, along with photographs and supporting details.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>6.2 Refunds</Typography>
          <Typography variant="body1" paragraph>
            If a refund is approved, the amount shall be refunded to the original payment method within 7 working days.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>7. Intellectual Property</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>7.1 Ownership of Rights</Typography>
          <Typography variant="body1" paragraph>
            All artworks, images, designs, text, and content displayed on the Site are protected under applicable copyright and intellectual property laws.
          </Typography>
          <Typography variant="body1" paragraph>
            Purchase of an artwork grants the buyer a limited right to personal ownership and display only. No copyright or intellectual property rights are transferred to the buyer.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>7.2 Restrictions on Use</Typography>
          <Typography variant="body1" paragraph>
            You agree not to reproduce, distribute, publish, modify, commercially exploit, or create derivative works from any artwork without the prior written permission of the Artist.
          </Typography>
          <Typography variant="body1" paragraph>
            Any unauthorized use may result in legal action.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>8. Representations and Warranties</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>8.1 Disclaimer of Warranties</Typography>
          <Typography variant="body1" paragraph>
            The Artist strives to ensure accurate descriptions and representations of all artworks. However, all artworks are sold on an “as is” basis.
          </Typography>
          <Typography variant="body1" paragraph>
            To the fullest extent permitted by law, the Artist disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>8.2 Authenticity</Typography>
          <Typography variant="body1" paragraph>
            The Artist represents that the artworks listed for sale are authentic original works unless expressly stated otherwise.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>9. Limitation of Liability</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>9.1 Limitation of Damages</Typography>
          <Typography variant="body1" paragraph>
            To the fullest extent permitted by law, the Artist’s total liability arising out of or relating to these Terms or the use of the Site shall not exceed the amount paid by the buyer for the artwork in question.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>9.2 Exclusion of Certain Damages</Typography>
          <Typography variant="body1" paragraph>
            The Artist shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, business interruption, or loss of data.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>10. Indemnification</Typography>
          <Typography variant="body1" paragraph>
            You agree to indemnify, defend, and hold harmless the Artist from and against any claims, liabilities, damages, losses, or expenses arising out of:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>Your use of the Site;</li>
            <li>Your violation of these Terms; or</li>
            <li>Your infringement of any third-party rights.</li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>11. Dispute Resolution</Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>In the event of any dispute, the parties shall first attempt to resolve the matter amicably through mutual communication.</li>
            <li>If the dispute remains unresolved, it shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996.</li>
            <li>The seat and venue of arbitration shall be Mumbai, Maharashtra, India.</li>
            <li>The decision of the arbitrator shall be final and binding on both parties.</li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>12. Governing Law</Typography>
          <Typography variant="body1" paragraph>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>13. Changes to Terms</Typography>
          <Typography variant="body1" paragraph>
            The Artist reserves the right to modify or update these Terms at any time without prior notice. Continued use of the Site following any changes constitutes acceptance of the revised Terms.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>14. Termination</Typography>
          <Typography variant="body1" paragraph>
            The Artist reserves the right to terminate or suspend access to the Site at any time, without prior notice, for conduct believed to violate these Terms or applicable law.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 3, mb: 1 }}>15. Miscellaneous</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>15.1 Entire Agreement</Typography>
          <Typography variant="body1" paragraph>
            These Terms constitute the complete agreement between you and the Artist regarding use of the Site.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>15.2 Severability</Typography>
          <Typography variant="body1" paragraph>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 400, fontFamily: 'Fira Sans, sans-serif', mt: 1 }}>15.3 Waiver</Typography>
          <Typography variant="body1" paragraph>
            Failure to enforce any provision of these Terms shall not constitute a waiver of such provision or any other provision.
          </Typography>

        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button 
          onClick={onClose} 
          variant="contained" 
          sx={{ 
            backgroundColor: 'black', 
            color: 'white',
            fontFamily: 'Fira Sans, sans-serif',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.8)',
            }
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TermsAndConditionsModal;
