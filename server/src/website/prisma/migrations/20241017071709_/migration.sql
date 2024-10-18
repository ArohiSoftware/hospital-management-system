-- AlterTable
CREATE SEQUENCE advertisement_id_seq;
ALTER TABLE "Advertisement" ALTER COLUMN "id" SET DEFAULT nextval('advertisement_id_seq');
ALTER SEQUENCE advertisement_id_seq OWNED BY "Advertisement"."id";

-- AlterTable
CREATE SEQUENCE client_id_seq;
ALTER TABLE "Client" ALTER COLUMN "id" SET DEFAULT nextval('client_id_seq');
ALTER SEQUENCE client_id_seq OWNED BY "Client"."id";

-- AlterTable
CREATE SEQUENCE clientsubscription_id_seq;
ALTER TABLE "ClientSubscription" ALTER COLUMN "id" SET DEFAULT nextval('clientsubscription_id_seq');
ALTER SEQUENCE clientsubscription_id_seq OWNED BY "ClientSubscription"."id";

-- AlterTable
CREATE SEQUENCE paymentmethod_id_seq;
ALTER TABLE "PaymentMethod" ALTER COLUMN "id" SET DEFAULT nextval('paymentmethod_id_seq');
ALTER SEQUENCE paymentmethod_id_seq OWNED BY "PaymentMethod"."id";

-- AlterTable
CREATE SEQUENCE review_id_seq;
ALTER TABLE "Review" ALTER COLUMN "id" SET DEFAULT nextval('review_id_seq');
ALTER SEQUENCE review_id_seq OWNED BY "Review"."id";

-- AlterTable
CREATE SEQUENCE setting_id_seq;
ALTER TABLE "Setting" ALTER COLUMN "id" SET DEFAULT nextval('setting_id_seq');
ALTER SEQUENCE setting_id_seq OWNED BY "Setting"."id";

-- AlterTable
CREATE SEQUENCE subscriptionplan_id_seq;
ALTER TABLE "SubscriptionPlan" ALTER COLUMN "id" SET DEFAULT nextval('subscriptionplan_id_seq');
ALTER SEQUENCE subscriptionplan_id_seq OWNED BY "SubscriptionPlan"."id";

-- AlterTable
CREATE SEQUENCE user_id_seq;
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE user_id_seq OWNED BY "User"."id";

-- AlterTable
CREATE SEQUENCE usercredentials_id_seq;
ALTER TABLE "UserCredentials" ALTER COLUMN "id" SET DEFAULT nextval('usercredentials_id_seq');
ALTER SEQUENCE usercredentials_id_seq OWNED BY "UserCredentials"."id";
